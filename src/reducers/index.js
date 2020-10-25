import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage/session";
import auth from "./auth";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import localForage from "localforage";

const rootreducers = combineReducers({
  auth,
});

const persistConfig = {
  key: "primary",
  storage: localForage,
  whitelist: ["auth"],
  // set to store
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootreducers);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

// export { store, persistor };

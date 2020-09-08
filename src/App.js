import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.less";
import Loading from "./components/loading/Loading";

const Home = React.lazy(() => import("./pages/home/home"));

const App = () => (
  <BrowserRouter>
    <React.Suspense fallback={Loading()}>
      <Switch>
        <Route path="/" render={() => <Home />} />
        <Route path="/home" render={() => <Home />} />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default App;

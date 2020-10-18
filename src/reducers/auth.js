const auth = (state = { data: {}, loading: false }, action) => {
  switch (action.type) {
    case "AUTH WAITING":
      state.loading = true;
      return (state.data = {});

    case "AUTH SUCCESS":
      state.loading = false;
      return (state.data = action.data);

    case "AUTH ERROR":
      state.loading = false;
      return (state.data = {});

    default:
      state.loading = false;
      return (state.data = {});
  }
};

export default auth;

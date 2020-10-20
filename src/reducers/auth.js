const auth = (
  state = { data: { loading: false, profile: {}, logined: false } },
  action
) => {
  switch (action.type) {
    case "AUTH WAITING":
      return (state.data = {
        loading: true,
        profile: {},
        logined: false,
      });

    case "AUTH SUCCESS":
      return (state.data = {
        loading: false,
        profile: action.data,
        logined: true,
      });

    case "AUTH ERROR":
      return (state.data = {
        loading: false,
        profile: {},
        logined: false,
      });

    default:
      return (state.data = {
        loading: false,
        profile: {},
        logined: false,
      });
  }
};

export default auth;

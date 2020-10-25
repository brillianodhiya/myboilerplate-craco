// import dayjs from "dayjs";
import moment from "moment";

const auth = (
  state = {
    data: { loading: false, profile: {}, logined: false, expiredAt: "Not Set" },
  },
  action
) => {
  switch (action.type) {
    case "AUTH WAITING":
      return (state.data = {
        loading: true,
        profile: {},
        logined: false,
        expiredAt: "Not Set",
      });

    case "AUTH SUCCESS":
      return (state.data = {
        loading: false,
        profile: action.data,
        logined: true,
        expiredAt: moment().add(3, "hours"),
      });

    case "AUTH ERROR":
      return (state.data = {
        loading: false,
        profile: {},
        logined: false,
        expiredAt: "Not Set",
      });

    case "AUTH OUT":
      return (state.data = {
        loading: false,
        profile: {},
        logined: false,
        expiredAt: "Not Set",
      });

    default:
      return (state.data = {
        loading: false,
        profile: {},
        logined: false,
        expiredAt: "Not Set",
      });
  }
};

export default auth;

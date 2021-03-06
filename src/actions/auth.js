import { message } from "antd";
import WEIOTSLOGO from "../assets/logo1.png";

const dataDummy = {
  username: "admin",
  password: "123456",
  name: "Admin WASP",
  phone: "08819671476",
  email: "admin@gmail.com",
  photo: WEIOTSLOGO,
};

const Login = (data, setLoading, cb) => {
  setLoading(true);
  cb({
    type: "AUTH WAITING",
  });
  return setTimeout(() => {
    setLoading(false);
    if (
      data.username === dataDummy.username &&
      data.password === dataDummy.password
    ) {
      message.success("Success Logined!");
      delete dataDummy.password;
      cb({
        type: "AUTH SUCCESS",
        data: dataDummy,
      });
    } else {
      message.error("Error username atau password salah!");
      cb({
        error: "403",
        message: "Username atau passowrd salah",
        type: "AUTH ERROR",
      });
    }
  }, 2000);
};

export { Login };

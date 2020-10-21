import { message } from "antd";
import Abah from "../assets/abah.jpeg";

const dataDummy = {
  username: "imam",
  password: "123456",
  name: "Imam Mujiono",
  phone: "08819671476",
  email: "mujionosingo@gmail.com",
  photo: Abah,
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

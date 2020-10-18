import { message } from "antd";
import React from "react";
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
  return setTimeout(() => {
    setLoading(false);
    if (
      data.username === dataDummy.username &&
      data.password === dataDummy.password
    ) {
      message.success("Success Logined!");
      cb(dataDummy);
    } else {
      message.error("Error username atau password salah!");
      cb({
        error: "403",
        message: "Username atau passowrd salah",
      });
    }
  }, 3000);
};

export { Login };
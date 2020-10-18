import React from "react";
import { Form, Input, Button, Checkbox, Typography, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../assets/lilia_logo.png";
import { Login as LoginService } from "../../actions/auth";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const authState = useSelector((state) => state);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (values.remember) {
      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
    LoginService(
      { username: values.username, password: values.password },
      setLoading,
      (cb) => {
        // console.log(cb, "CB");
        dispatch(cb);
      }
    );
  };

  console.log(authState, "AUTH STATE");

  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "24px",
            fontSize: "24px",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ position: "relative", width: "120px" }}
          />
          <Typography.Title level={3}>
            <span style={{ color: "crimson" }}>RT 20</span> Platform
          </Typography.Title>
        </div>
        <Form.Item
          name="username"
          initialValue={localStorage.getItem("username")}
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          initialValue={localStorage.getItem("password")}
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Ingatkan saya</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Lupa password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Masuk
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

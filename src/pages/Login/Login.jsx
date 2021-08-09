import React from "react";
import { Form, Input, Button, Checkbox, Typography, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../assets/weiots-transparent.png";
import { Login as LoginService } from "../../actions/auth";
import { useSelector, useDispatch } from "react-redux";

const Login = (props) => {
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
        window.localStorage.setItem("name", cb.data?.name);
        window.localStorage.setItem("img", cb.data?.photo);
        dispatch(cb);
      }
    );
  };

  React.useEffect(() => {
    if (authState.auth.logined && !loading) {
      setTimeout(() => {
        window.location.replace("/");
      }, 1000);
    }
  }, [authState, loading]);

  return (
    <div>
      <Row>
        <Col xl={16} sm={12} xs={0} style={{ height: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
              margin: "360px 0",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ position: "relative", width: "240px" }}
            />
          </div>
        </Col>
        <Col
          xl={8}
          sm={12}
          xs={24}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "240px 0",
            height: "100%",
          }}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            size="large"
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "24px",
                fontSize: "24px",
              }}
            >
              <Typography.Title level={3}>Login</Typography.Title>
            </div>
            <Form.Item
              name="username"
              initialValue={localStorage.getItem("username")}
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              initialValue={localStorage.getItem("password")}
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
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
        </Col>
      </Row>
    </div>
  );
};

export default Login;

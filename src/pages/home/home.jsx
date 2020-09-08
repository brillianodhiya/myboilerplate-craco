import React from "react";
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
  Layout,
  Menu,
} from "antd";
import LiLiaLogo from "../../assets/lilia_logo.png";
import Background from "../../assets/header.gif";

const { Header, Content, Footer } = Layout;

const { Option } = Select;
const { Title } = Typography;

const Home = () => {
  return (
    <>
      <section
        style={{
          //   textAlign: "center",
          paddingTop: 28,
          //   paddingBottom: 28,
          background: `url(${Background}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <img style={{ width: 180 }} src={LiLiaLogo} alt="Ant Design" />
        {/* <Space align="start"></Space> */}
        <Layout className="layout" style={{ background: "unset" }}>
          <Header style={{ background: "unset" }}>
            <div className="logo" />
            <Menu
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                background: "none",
              }}
              mode="horizontal"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">News</Menu.Item>
              <Menu.Item key="3">Projects</Menu.Item>
              <Menu.Item key="4">Characters</Menu.Item>
              <Menu.Item key="5">Story</Menu.Item>
              <Menu.Item key="6">About Us</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </section>
    </>
  );
};

export default Home;

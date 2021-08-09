import React from "react";
import { Layout, Typography, Dropdown, Menu, message, Button } from "antd";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

const { Header } = Layout;

const AppHeader = ({ mode, pageBreak, hide, setHide }) => {
  const authState = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!authState.auth.logined) {
      window.location.replace("/login");
    }
    // console.log(moment(authState.auth.expiredAt).format("LLLL"));
    if (moment(authState.auth.expiredAt).isBefore(moment())) {
      message.warn("Session Login telah berakhir");
      dispatch({ type: "AUTH OUT" });
      setTimeout(() => {
        window.location.replace("/login");
      }, 1000);
    }
  }, []);
  // console.log(authState);

  //   console.log(authState, "AUTHSTATE");
  return (
    <Header
      style={{
        padding: 0,
        textAlign: "right",
        background: mode === "dark" ? undefined : "#fff",
      }}
    >
      <span style={{ float: "left", padding: "0 12px" }}>
        <Button type="text" size="large" onClick={() => setHide(!hide)}>
          {hide ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </span>
      <span
        style={{
          float: "left",
          padding: "18px 0",
        }}
      >
        {pageBreak ? (
          <Typography.Title
            level={4}
            style={{ color: mode === "dark" ? "#fff" : undefined }}
          >
            WASP
          </Typography.Title>
        ) : (
          <Typography.Title
            level={4}
            style={{ color: mode === "dark" ? "#fff" : undefined }}
          >
            WEIOTS SaaS Platform
          </Typography.Title>
        )}
      </span>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="0">
              <a>Pengaturan Akun</a>
            </Menu.Item>
            <Menu.Item key="1">
              <a
                onClick={() => {
                  dispatch({ type: "AUTH OUT" });
                  setTimeout(() => {
                    window.location.replace("/login");
                  }, 1000);
                }}
              >
                Log Out
              </a>
            </Menu.Item>
            {/* <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item> */}
          </Menu>
        }
        trigger={["click"]}
      >
        <a
          style={{ marginRight: "16px" }}
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          Akun <DownOutlined />
        </a>
      </Dropdown>
    </Header>
  );
};

export default AppHeader;

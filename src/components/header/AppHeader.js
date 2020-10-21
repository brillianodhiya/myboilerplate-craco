import React from "react";
import { Layout, Typography, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

const { Header } = Layout;

const AppHeader = ({ mode }) => {
  const authState = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!authState.auth.logined) {
      window.location.replace("/login");
    }
  }, []);

  //   console.log(authState, "AUTHSTATE");
  return (
    <Header
      style={{
        padding: 0,
        textAlign: "right",
        background: mode === "dark" ? undefined : "#fff",
      }}
    >
      <span
        style={{
          float: "left",
          padding: "20px",
        }}
      >
        <Typography.Title
          level={4}
          style={{ color: mode === "dark" ? "#fff" : undefined }}
        >
          RT 20 App
        </Typography.Title>
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

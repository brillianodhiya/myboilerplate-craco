import React from "react";
import {
  BrowserRouter,
  Switch as SwitchRoute,
  Route,
  Link,
} from "react-router-dom";
import "./App.less";
import Loading from "./components/loading/Loading";
import {
  Layout,
  Menu,
  BackTop,
  Avatar,
  Typography,
  Divider,
  Result,
  Button,
  Switch,
  Dropdown,
} from "antd";
import {
  FileOutlined,
  TeamOutlined,
  DashboardFilled,
  DownOutlined,
} from "@ant-design/icons";
import routes from "./routes";
import Abah from "./assets/abah.jpeg";
import Login from "./pages/Login/Login";

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

const ProfileInfo = {
  name: "Imam Mujiono Singo",
  img: Abah,
};

const App = () => {
  const [path, setPath] = React.useState("/dashboard");
  const [breakPointPosition, setBreakPointPosition] = React.useState(false);
  const [mode, setMode] = React.useState("dark");

  const urlData = window.location.pathname;

  React.useEffect(() => {
    setPath(urlData === "/" ? "/dashboard" : urlData);
  }, [urlData]);

  return (
    <BrowserRouter>
      <SwitchRoute>
        <Route path="/login" exact={true} name="Login" component={Login} />
      </SwitchRoute>
      {urlData !== "/login" && (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            breakpoint="lg"
            width="280"
            theme={mode}
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
              setBreakPointPosition(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div style={{ textAlign: "right", padding: "24px" }}>
              <Switch
                checked={mode === "dark" ? true : false}
                onChange={(checked) => setMode(checked ? "dark" : "light")}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              />
            </div>
            <a href="">
              <div style={{ textAlign: "center", paddingTop: "24px" }}>
                <Avatar size={112} src={ProfileInfo.img} />
                <Typography.Title
                  style={{
                    marginTop: "20px",
                    color: mode === "dark" ? "#fff" : undefined,
                  }}
                  level={4}
                >
                  {ProfileInfo.name.split(" ").map((val, idx) => {
                    if (idx === 0) {
                      return <span style={{ color: "crimson" }}>{val}</span>;
                    } else {
                      return " " + val;
                    }
                  })}
                </Typography.Title>
              </div>
            </a>
            <Divider />
            <Menu
              theme={mode}
              onSelect={(info) => setPath(info.selectedKeys[0])}
              selectedKeys={[path]}
              mode="inline"
            >
              <Menu.Item key="/dashboard" icon={<DashboardFilled />}>
                <Link to="/">Dashboard</Link>
              </Menu.Item>
              <SubMenu key="warga" icon={<TeamOutlined />} title="Warga">
                <Menu.Item key="/warga/semua">
                  <Link to="/warga/semua">Semua</Link>
                </Menu.Item>
                <Menu.Item key="/warga/ktp">
                  <Link to="/warga/ktp">KTP</Link>
                </Menu.Item>
                <Menu.Item key="/warga/kk">
                  <Link to="/warga/kk">KK</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />} />
            </Menu>
          </Sider>
          <Layout>
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
                      <a>Log Out</a>
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
            <Content>
              <div>
                <React.Suspense fallback={Loading()}>
                  {routes.filter((val) => val.path === window.location.pathname)
                    .length > 0 ? (
                    <SwitchRoute>
                      {routes.map((route, idx) => {
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            responsive={breakPointPosition}
                            render={(props) => (
                              <route.component {...props} name={route.name} />
                            )}
                          />
                        ) : null;
                      })}
                    </SwitchRoute>
                  ) : (
                    <Result
                      status="404"
                      title="404"
                      subTitle="Sorry, the page you visited does not exist."
                      extra={
                        <Button
                          type="primary"
                          onClick={() => window.location.replace("/")}
                        >
                          Back Home
                        </Button>
                      }
                    />
                  )}
                </React.Suspense>
              </div>
            </Content>
            <Footer
              style={{
                textAlign: "center",
                fontWeight: "bold",
                borderTop: "1px solid black",
              }}
            >
              Copyright © 2020 Created by LiLia Sekai Corp.
            </Footer>
            <BackTop />
          </Layout>
        </Layout>
      )}
    </BrowserRouter>
  );
};

export default App;

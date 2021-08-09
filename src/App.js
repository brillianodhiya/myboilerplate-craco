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
} from "antd";
import {
  FileOutlined,
  TeamOutlined,
  DashboardFilled,
  FileDoneOutlined,
} from "@ant-design/icons";
import routes from "./routes";
import Login from "./pages/Login/Login.jsx";
import AppHeader from "./components/header/AppHeader";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./reducers/index";
import moment from "dayjs";
import "moment/locale/id";
import LogoWeiots from "assets/weiots-transparent.png";
import LogoWeiots2 from "assets/logo1.png";

moment.locale("id");

const { store, persistor } = configureStore();

const { SubMenu } = Menu;

const { Content, Footer, Sider } = Layout;

// const ProfileInfo = {
// name: "Imam Mujiono Singo",
// img: Abah,
// };

const App = () => {
  const [path, setPath] = React.useState("/price-list");
  const [breakPointPosition, setBreakPointPosition] = React.useState(false);
  const [mode, setMode] = React.useState("light");

  const [ProfileInfo, setProfileInfo] = React.useState({
    name: "Admin WASP",
    img: "",
  });

  const [collapse, setCollapse] = React.useState(false);

  const [hide, setHide] = React.useState(false);

  // console.log(ProfileInfo, "PROFILE INFO");

  const urlData = window.location.pathname;

  React.useEffect(() => {
    setPath(urlData === "/" ? "/price-list" : urlData);
  }, [urlData]);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <BrowserRouter>
          <SwitchRoute>
            <Route
              path="/login"
              exact={true}
              name="Login"
              component={(props) => <Login {...props} />}
            />
          </SwitchRoute>
          {urlData !== "/login" && (
            <Layout style={{ minHeight: "100vh" }}>
              <Sider
                collapsed={collapse}
                collapsible
                breakpoint="lg"
                // width="280"
                hidden={hide}
                theme={mode}
                // collapsedWidth="0"

                onBreakpoint={(broken) => {
                  console.log(broken);
                  setBreakPointPosition(broken);
                }}
                onCollapse={(collapsed, type) => {
                  // console.log(collapsed, type);
                  setCollapse(collapsed);
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: collapse ? "24px 0 0 4px" : "24px 0 0 0",
                  }}
                >
                  <img
                    src={collapse ? LogoWeiots2 : LogoWeiots}
                    style={{
                      position: "relative",
                      width: collapse ? "50%" : "80%",
                    }}
                  />
                </div>
                <Divider />
                <Menu
                  theme={mode}
                  onSelect={(info) => setPath(info.selectedKeys[0])}
                  selectedKeys={[path]}
                  mode="inline"
                >
                  <Menu.Item key="/price-list" icon={<FileDoneOutlined />}>
                    <Link to="/">Price List</Link>
                  </Menu.Item>
                  {/* <SubMenu key="warga" icon={<TeamOutlined />} title="Warga">
                    <Menu.Item key="/warga/list">
                      <Link to="/warga/list">Daftar Warga</Link>
                    </Menu.Item>
                    <Menu.Item key="/warga/ktp">
                      <Link to="/warga/ktp">KTP</Link>
                    </Menu.Item>
                    <Menu.Item key="/warga/kk">
                      <Link to="/warga/kk">KK</Link>
                    </Menu.Item>
                    <Menu.Item key="/warga/status">
                      <Link to="/warga/status">Status Warga</Link>
                    </Menu.Item>
                    <Menu.Item key="/warga/pekerjaan">
                      <Link to="/warga/pekerjaan">Pekerjaan Warga</Link>
                    </Menu.Item>
                  </SubMenu> */}
                </Menu>
              </Sider>
              <Layout>
                <AppHeader
                  setHide={setCollapse}
                  hide={collapse}
                  mode={mode}
                  pageBreak={breakPointPosition}
                />
                <Content>
                  <div style={{ padding: "32px" }}>
                    <React.Suspense fallback={Loading()}>
                      {routes.filter(
                        (val) => val.path === window.location.pathname
                      ).length > 0 ? (
                        <SwitchRoute>
                          {routes.map((route, idx) => {
                            return route.component ? (
                              <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={(props) => (
                                  <route.component
                                    {...props}
                                    name={route.name}
                                    responsive={breakPointPosition}
                                  />
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
                    background: mode === "dark" ? "#001529" : "#fff",
                    color: mode === "dark" ? "#fff" : "#000",
                  }}
                >
                  Copyright © 2021.
                </Footer>
                <BackTop />
              </Layout>
            </Layout>
          )}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;

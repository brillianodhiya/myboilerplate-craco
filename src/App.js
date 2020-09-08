import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.less";
import Loading from "./components/loading/Loading";
import { Layout, Menu, BackTop } from "antd";
import LiLiaLogo from "./assets/lilia_logo.png";
import Background from "./assets/header.gif";
import routes from "./routes";

const { Header, Content, Footer } = Layout;

const Home = React.lazy(() => import("./pages/home/home"));

// const SS = withRouter(() => {

// })

const App = () => {
  const [path, setPath] = React.useState("/home");

  React.useEffect(() => {
    setPath(
      window.location.pathname === "/" ? "/home" : window.location.pathname
    );
  }, [window.location.pathname]);

  return (
    <>
      <BrowserRouter>
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
          <img style={{ width: 180 }} src={LiLiaLogo} alt="LiLia Sekai" />
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
                onSelect={(e) => setPath(e.selectedKeys[0])}
                // defaultSelectedKeys={["/home"]}
                selectedKeys={[path]}
              >
                <Menu.Item key="/home">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="/news">
                  <Link to="/news">News</Link>
                </Menu.Item>
                <Menu.Item key="/projects">
                  <Link to="/projects">Projects</Link>
                </Menu.Item>
                <Menu.Item key="/gallery">
                  <Link to="/gallery">Gallery</Link>
                </Menu.Item>
                <Menu.Item key="/story">
                  <Link to="/story">Story</Link>
                </Menu.Item>
                <Menu.Item key="/about">
                  <Link to="/about">About Us</Link>
                </Menu.Item>
              </Menu>
            </Header>
          </Layout>
        </section>
        <Content>
          <React.Suspense fallback={Loading()}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <route.component {...props} name={route.name} />
                    )}
                  />
                ) : null;
              })}
              {/* <Route path="/" render={() => <Home />} />
            <Route path="/home" render={() => <Home />} /> */}
            </Switch>
          </React.Suspense>
        </Content>
        <Footer>
          <div style={{ textAlign: "center", width: "100%" }}>
            LiLia Sekai ©2020 Created by LiLia
          </div>
        </Footer>
        <BackTop />
      </BrowserRouter>
    </>
  );
};

export default App;

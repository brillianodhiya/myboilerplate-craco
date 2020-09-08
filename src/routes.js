import React from "react";

const Home = React.lazy(() => import("./pages/home/home"));

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/home", name: "Home 2", component: Home },
];

export default routes;

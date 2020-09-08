import React from "react";

const Home = React.lazy(() => import("./pages/home/home"));
const Gallery = React.lazy(() => import("./pages/gallery/Gallery"));
const About = React.lazy(() => import("./pages/about/About"));
const News = React.lazy(() => import("./pages/news/News"));
const Projects = React.lazy(() => import("./pages/projects/Projects"));
const Story = React.lazy(() => import("./pages/story/Story"));

const routes = [
  { path: "/", name: "Home", component: Home, exact: true },
  { path: "/home", name: "Home", component: Home, exact: true },
  { path: "/gallery", name: "Gallery", component: Gallery, exact: true },
  { path: "/about", name: "About", component: About, exact: true },
  { path: "/news", name: "News", component: News, exact: true },
  { path: "/projects", name: "Projects", component: Projects, exact: true },
  { path: "/story", name: "Story", component: Story, exact: true },
];

export default routes;

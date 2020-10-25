import React from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard/index"));
const SemuaWarga = React.lazy(() => import("./pages/Warga/Semua"));
const KtpList = React.lazy(() => import("./pages/Warga/KTP"));
const KkList = React.lazy(() => import("./pages/Warga/KK"));

// React.lazy(() => import())

// { path: "",  name: "", component: , exact: },

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard, exact: true },
  { path: "/dashboard", name: "Dashboard", component: Dashboard, exact: true },
  { path: "/warga", name: "Warga", component: SemuaWarga, exact: true },
  { path: "/warga/list", name: "List Warga", component: SemuaWarga },
  { path: "/warga/kk", name: "List KK", component: KkList },
  { path: "/warga/ktp", name: "List KTP", component: KtpList },
];

export default routes;

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
  { path: "/warga/semua", name: "Warga", component: SemuaWarga },
  { path: "/warga/ktp", name: "KTP List", component: KtpList },
  { path: "/warga/kk", name: "KK List", component: KkList },
];

export default routes;

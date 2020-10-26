import React from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard/index"));
const SemuaWarga = React.lazy(() => import("./pages/Warga/Semua"));
const KtpList = React.lazy(() => import("./pages/Warga/KTP"));
const KkList = React.lazy(() => import("./pages/Warga/KK"));
const StatusWargaList = React.lazy(() => import("./pages/Warga/Status Warga"));
const PekerjaanWargaList = React.lazy(() => import("./pages/Warga/Pekerjaan"));

// React.lazy(() => import())

// { path: "",  name: "", component: , exact: },

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard, exact: true },
  { path: "/dashboard", name: "Dashboard", component: Dashboard, exact: true },
  { path: "/warga", name: "Warga", component: SemuaWarga, exact: true },
  { path: "/warga/list", name: "List Warga", component: SemuaWarga },
  { path: "/warga/kk", name: "List KK", component: KkList },
  { path: "/warga/ktp", name: "List KTP", component: KtpList },
  {
    path: "/warga/status",
    name: "List Status Warga",
    component: StatusWargaList,
  },
  {
    path: "/warga/pekerjaan",
    name: "List Pekerjaan Warga",
    component: PekerjaanWargaList,
  },
];

export default routes;

import React from "react";
import { PageHeader } from "antd";

const routes = [
  {
    // path: "index",
    breadcrumbName: "Warga",
  },
  {
    // path: "first",
    breadcrumbName: "KTP",
  },
];

const Ktp = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Daftar KTP"
        subTitle="Pengelolaan KTP"
        breadcrumb={{ routes }}
      />
    </div>
  );
};

export default Ktp;

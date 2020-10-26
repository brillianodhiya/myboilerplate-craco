import { Button, Col, Divider, Modal, PageHeader, Row, Table } from "antd";
import React from "react";
import { dummyPekerjaanWarga } from "../../../dummy";
import moment from "moment";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const routes = [
  {
    // path: "index",
    breadcrumbName: "Warga",
  },
  {
    // path: "first",
    breadcrumbName: "Daftar Pekerjaan",
  },
];

const Pekerjaan = () => {
  const [loading, setLoading] = React.useState(false);
  const [listPekerjaan, setlistPekerjaan] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setlistPekerjaan(dummyPekerjaanWarga);
    }, 1000);
  }, []);

  function showDeleteConfirm() {
    confirm({
      title: "Apakah kamu yakin ingin menghapus pekerjaan ini?",
      icon: <ExclamationCircleOutlined />,
      content: "Pekerjaan yang sudah di hapus tidak bisa di kembalikan",
      okText: "Ya",
      okType: "danger",
      cancelText: "Tidak",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Pekerjaan Warga"
        subTitle="Pengelolaan Daftar Pekerjaan Warga"
        breadcrumb={{ routes }}
      />
      <Row style={{ marginTop: "32px" }}>
        <Col
          span={24}
          className="site-page-content"
          style={{ textAlign: "right" }}
        >
          <Button loading={loading} type="primary">
            Tambah Pekerjaan
          </Button>
          <Divider type="horizontal" />

          <Table size="middle" loading={loading} dataSource={listPekerjaan}>
            <Table.Column title="Nama Pekerjaan" dataIndex="name" />
            <Table.Column
              title="Dibuat Pada"
              dataIndex="createdAt"
              responsive={["md"]}
              render={(text) => {
                return moment(text).format("LLL");
              }}
            />
            <Table.Column
              title="Dibuat Oleh"
              responsive={["md"]}
              dataIndex="createdFrom"
            />
            <Table.Column
              dataIndex="id"
              render={(text) => {
                return [
                  <Button>Edit</Button>,
                  <Button danger onClick={showDeleteConfirm}>
                    Delete
                  </Button>,
                ];
              }}
            />
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Pekerjaan;

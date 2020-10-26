import { Button, Col, Divider, Modal, PageHeader, Row, Table } from "antd";
import React from "react";
import { dummyStatusWarga } from "../../../dummy";
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
    breadcrumbName: "Status Warga",
  },
];

const StatusWarga = () => {
  const [loading, setLoading] = React.useState(false);
  const [listStatus, setListStatus] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setListStatus(dummyStatusWarga);
    }, 1000);
  }, []);

  function showDeleteConfirm() {
    confirm({
      title: "Apakah kamu yakin ingin menghapus status ini?",
      icon: <ExclamationCircleOutlined />,
      content: "Status yang sudah di hapus tidak bisa di kembalikan",
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
        title="Status Warga"
        subTitle="Pengelolaan Status Warga"
        breadcrumb={{ routes }}
      />
      <Row style={{ marginTop: "32px" }}>
        <Col
          span={24}
          className="site-page-content"
          style={{ textAlign: "right" }}
        >
          <Button loading={loading} type="primary">
            Tambahkan Status Warga
          </Button>
          <Divider type="horizontal" />

          <Table size="middle" loading={loading} dataSource={listStatus}>
            <Table.Column title="Nama Status" dataIndex="status_name" />
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

export default StatusWarga;

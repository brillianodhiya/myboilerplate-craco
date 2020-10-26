import React from "react";
import {
  Button,
  Col,
  Dropdown,
  Menu,
  PageHeader,
  Row,
  Table,
  Modal,
  Input,
  Select,
  Divider,
} from "antd";
import moment from "moment";
import { UserOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { dummyListWarga, dummyStatusWarga } from "../../../dummy/index";

const { confirm } = Modal;
const { Search } = Input;
const { Option } = Select;

const routes = [
  {
    breadcrumbName: "Warga",
  },
  {
    breadcrumbName: "Daftar Warga",
  },
];

const Semua = (props) => {
  const [loading, setLoading] = React.useState(false);

  const [listStatus, setListStatus] = React.useState([]);
  const [listWarga, setListWarga] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setListStatus(dummyStatusWarga);
      setListWarga(dummyListWarga);
    }, 1000);
  }, []);

  function showDeleteConfirm() {
    confirm({
      title: "Apakah kamu yakin ingin menghapus data warga ini?",
      icon: <ExclamationCircleOutlined />,
      content: "data warga yang sudah di hapus tidak bisa di kembalikan",
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
        title="Daftar Warga"
        subTitle="Pengelolaan Data Warga"
        breadcrumb={{ routes }}
      />
      <Row style={{ marginTop: "32px" }}>
        <Col
          span={24}
          className="site-page-content"
          style={{ textAlign: "right" }}
        >
          <Button style={{ float: "left" }} loading={loading}>
            Export Excel
          </Button>
          <Button loading={loading} type="primary">
            Add Warga
          </Button>
          <Divider type="horizontal" />
          {!props.responsive && (
            <Select
              defaultValue="semua"
              loading={loading}
              style={{ width: 120, float: "left" }}
            >
              <Option value="semua">Semua</Option>
              {listStatus.map((val, idx) => {
                return (
                  <Option key={idx} value={val.status_name}>
                    {val.status_name}
                  </Option>
                );
              })}
            </Select>
          )}
          <Search
            style={{ width: props.responsive ? "80%" : "40%" }}
            placeholder="Cari berdasarkan nama"
            loading={loading}
          />
          {props.responsive && (
            <Select
              loading={loading}
              defaultValue="semua"
              style={{ width: 120, marginTop: "20px" }}
            >
              <Option value="semua">Semua</Option>
              {listStatus.map((val, idx) => {
                return (
                  <Option key={idx} value={val.status_name}>
                    {val.status_name}
                  </Option>
                );
              })}
            </Select>
          )}
          <Table
            size="middle"
            style={{ marginTop: "20px" }}
            dataSource={listWarga}
            rowKey="id"
            loading={loading}
          >
            <Table.Column title="Nama" dataIndex="nama_warga" />
            <Table.Column
              title="Tanggal Lahir"
              dataIndex="tgl_lahir"
              responsive={["md"]}
              render={(text) => {
                return moment(text, "DD-MM-YYYY").format("LL");
              }}
            />
            <Table.Column
              title="Jenis Kelamin"
              dataIndex="jenis_kelamin"
              responsive={["md"]}
              render={(text) => {
                if (text === "P") {
                  return "Perempuan";
                } else {
                  return "Laki-Laki";
                }
              }}
            />
            <Table.Column
              dataIndex="id"
              render={(text) => {
                return (
                  <Dropdown.Button
                    type="primary"
                    // onClick={handleButtonClick}
                    overlay={
                      <Menu
                      // onClick={handleMenuClick}
                      >
                        <Menu.Item key="1" icon={<UserOutlined />}>
                          Edit
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UserOutlined />}>
                          Print
                        </Menu.Item>
                        <Menu.Item
                          onClick={showDeleteConfirm}
                          danger
                          key="2"
                          icon={<UserOutlined />}
                        >
                          Delete
                        </Menu.Item>
                      </Menu>
                    }
                  >
                    Preview
                  </Dropdown.Button>
                );
              }}
            />
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Semua;

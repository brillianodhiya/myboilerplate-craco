import React from "react";
import {
  Button,
  Col,
  Dropdown,
  Menu,
  PageHeader,
  Row,
  Table,
  Tabs,
  Modal,
  Input,
  Select,
} from "antd";
import moment from "moment";
import {
  DownOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;
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

const dummyStatusWarga = [
  {
    id: 1,
    status_name: "Hidup",
    createdAt: moment().subtract(2, "days"),
    createdFrom: "Imam Mujiono",
  },
  {
    id: 2,
    status_name: "Meninggal",
    createdAt: moment().subtract(2, "days"),
    createdFrom: "Imam Mujiono",
  },
  {
    id: 3,
    status_name: "Pendatang",
    createdAt: moment().subtract(2, "days"),
    createdFrom: "Imam Mujiono",
  },
  {
    id: 3,
    status_name: "Hilang",
    createdAt: moment().subtract(1, "days"),
    createdFrom: "Imam Mujiono",
  },
  {
    id: 4,
    status_name: "Merantau",
    createdAt: moment().subtract(2, "days"),
    createdFrom: "Imam Mujiono",
  },
];

const dummyListWarga = [
  {
    id: 1,
    nama_warga: "Imam Mujiono",
    no_ktp: "3500000000000002",
    jenis_kelamin: "L",
    no_kk: "3503223312330002",
    alamat: "Jarakan, RT 20 RW 05 Desa Karangsoko Kecamatan Trenggalek",
    status: {
      id: 1,
      status_name: "Hidup",
    },
    no_hp: "088291299222",
    pekerjaan: {
      nama_pekerjaan: "Wiraswasta",
    },
    tgl_lahir: "27-04-1972",
    agama: {
      nama_agama: "Islam",
    },
  },
  {
    id: 2,
    nama_warga: "Nurendah Trisnawati",
    no_ktp: "350221318282922",
    jenis_kelamin: "P",
    no_kk: "3503223312330002",
    alamat: "Jarakan, RT 20 RW 05 Desa Karangsoko Kecamatan Trenggalek",
    status: {
      id: 1,
      status_name: "Hidup",
    },
    no_hp: "088278299192",
    pekerjaan: {
      nama_pekerjaan: "Mengurus Rumah Tangga",
    },
    tgl_lahir: "31-05-1976",
    agama: {
      nama_agama: "Islam",
    },
  },
  {
    id: 3,
    nama_warga: "Brilliano Dhiya Ulhaq",
    no_ktp: "3503112408000001",
    jenis_kelamin: "L",
    no_kk: "3503223312330002",
    alamat: "Jarakan, RT 20 RW 05 Desa Karangsoko Kecamatan Trenggalek",
    status: {
      id: 1,
      status_name: "Hidup",
    },
    no_hp: "08819671476",
    pekerjaan: {
      nama_pekerjaan: "Developer",
    },
    tgl_lahir: "24-08-2000",
    agama: {
      nama_agama: "Islam",
    },
  },
  {
    id: 4,
    nama_warga: "Geovanni Edsel Asy-Safa'a",
    no_ktp: "",
    jenis_kelamin: "L",
    no_kk: "3503223312330002",
    alamat: "Jarakan, RT 20 RW 05 Desa Karangsoko Kecamatan Trenggalek",
    status: {
      id: 1,
      status_name: "Hidup",
    },
    no_hp: "",
    pekerjaan: {
      nama_pekerjaan: "Belum / Tidak Bekerja",
    },
    tgl_lahir: "30-04-2011",
    agama: {
      nama_agama: "Islam",
    },
  },
  {
    id: 5,
    nama_warga: "La Reassa Revita Salma",
    no_ktp: null,
    jenis_kelamin: "P",
    no_kk: "3503223312330002",
    alamat: "Jarakan, RT 20 RW 05 Desa Karangsoko Kecamatan Trenggalek",
    status: {
      id: 1,
      status_name: "Hidup",
    },
    no_hp: "088278299192",
    pekerjaan: {
      nama_pekerjaan: "Pelajar / Mahasiswa",
    },
    tgl_lahir: "23-06-2004",
    agama: {
      nama_agama: "Islam",
    },
  },
];

const Semua = (props) => {
  const [tab, setTab] = React.useState("Warga");
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
  }, [tab]);

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
        title="Daftar Warga"
        subTitle="Pengelolaan Data Warga"
        breadcrumb={{ routes }}
      />
      <Row style={{ marginTop: "32px" }}>
        <Col span={24} className="site-page-content">
          <Tabs
            onChange={(activeKey) => setTab(activeKey)}
            tabBarExtraContent={
              <Button loading={loading} type="primary">
                Add {tab}
              </Button>
            }
          >
            <TabPane tab="Warga" key="Warga" style={{ textAlign: "right" }}>
              {!props.responsive && (
                <Select
                  defaultValue="semua"
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
              <br />
              <Button style={{ marginTop: "20px" }} type="primary">
                Export
              </Button>
              <Table
                size="middle"
                style={{ marginTop: "20px" }}
                dataSource={listWarga}
                rowKey="id"
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
                            <Menu.Item danger key="2" icon={<UserOutlined />}>
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
            </TabPane>
            <TabPane tab="Status Warga" key="Status Warga">
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
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default Semua;

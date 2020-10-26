import moment from "moment";

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

const dummyPekerjaanWarga = [
  {
    id: 1,
    name: "Wirausaha",
    createdAt: moment().subtract(2, "days"),
    createdFrom: "Imam Mujiono",
  },
  {
    id: 2,
    name: "Mengurus Rumah Tangga",
    createdAt: moment().subtract(2, "days"),
    createdFrom: "Imam Mujiono",
  },
  {
    id: 3,
    name: "Developer",
    createdAt: moment().subtract(2, "days"),
    createdFrom: "Imam Mujiono",
  },
  {
    id: 3,
    name: "Tidak / Belum",
    createdAt: moment().subtract(1, "days"),
    createdFrom: "Imam Mujiono",
  },
  {
    id: 4,
    name: "Pelajar / Mahasiswa",
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

export { dummyListWarga, dummyStatusWarga, dummyPekerjaanWarga };

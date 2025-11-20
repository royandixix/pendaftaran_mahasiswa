const db = require('../config/db');

async function simpanFormulir(data) {
  const sql = `
    INSERT INTO formulir 
    (nama_lengkap, tempat_lahir, tanggal_lahir, alamat, no_hp, email, pendidikan_terakhir) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.nama_lengkap,
    data.tempat_lahir,
    data.tanggal_lahir,
    data.alamat,
    data.no_hp,
    data.email,
    data.pendidikan_terakhir
  ];

  const [result] = await db.query(sql, values);
  return result.insertId;
}

// ✅ Fungsi untuk ambil semua data
async function ambilSemuaFormulir() {
  const sql = `SELECT * FROM formulir`;
  const [rows] = await db.query(sql);
  return rows;
}

module.exports = {
  simpanFormulir,
  ambilSemuaFormulir
};

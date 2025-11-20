const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // sesuaikan
  password: '',      // sesuaikan
  database: 'pendaftaran_mahasiswa',
});

db.connect(err => {
  if (err) {
    console.error('❌ Gagal koneksi DB:', err);
  } else {
    console.log('✅ Terhubung ke DB');
  }
});

module.exports = db;

const { simpanFormulir } = require('../models/formulirModel');

exports.submitFormulir = async (req, res) => {
  try {
    const data = req.body;

    // Validasi input (pastikan semua field wajib terisi)
    if (
      !data.nama_lengkap ||
      !data.tempat_lahir ||
      !data.tanggal_lahir ||
      !data.alamat ||
      !data.no_hp ||
      !data.email ||
      !data.pendidikan_terakhir
    ) {
      return res.status(400).json({ message: 'Semua field wajib diisi.' });
    }

    // Simpan data ke database
    const id = await simpanFormulir(data);

    // Respon sukses
    res.status(201).json({ message: 'Formulir berhasil disimpan.', id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat menyimpan formulir.' });
  }
};

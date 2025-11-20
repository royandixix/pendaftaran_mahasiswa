const { createUser, findByUsername } = require('../models/userModel');

exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi.' });
  }

  try {
    const existingUser = await findByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username sudah digunakan.' });
    }

    const role = username === 'admin' ? 'admin' : 'mahasiswa';
    await createUser(username, password, role);

    return res.status(201).json({ message: 'Registrasi berhasil.' });
  } catch (err) {
    console.error('Registrasi gagal:', err);
    return res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi.' });
  }

  try {
    const user = await findByUsername(username);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Username atau password salah.' });
    }

    // Kirim role untuk client-side redirect
    return res.status(200).json({
      message: 'Login berhasil',
      username: user.username,
      role: user.role,
    });
  } catch (err) {
    console.error('Login gagal:', err);
    return res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
};

// models/userModel.js
const db = require('../config/db');

async function findByUsername(username) {
  const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
}

async function createUser(username, password, role = 'mahasiswa') {
  const [result] = await db.query(
    'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
    [username, password, role]
  );
  return result.insertId;
}

module.exports = {
  findByUsername,
  createUser,
};





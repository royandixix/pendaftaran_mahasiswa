const db = require('../config/db');

exports.getAllFormulir = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM formulir');
    return rows;
  } catch (error) {
    throw error;
  }
};

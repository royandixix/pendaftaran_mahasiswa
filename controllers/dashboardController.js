const dashboardModel = require('../models/dashboardModel');

exports.getFormulirData = async (req, res) => {
  try {
    const data = await dashboardModel.getAllFormulir();
    res.status(200).json({ data });
  } catch (error) {
    console.error('Gagal mengambil data formulir:', error);
    res.status(500).json({ message: 'Gagal mengambil data dari server.' });
  }
};

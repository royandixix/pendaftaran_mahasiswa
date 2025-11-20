const express = require('express');
const path = require('path');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes import
const authRoutes = require('./router/authRoutes');
const formulirRoutes = require('./router/formulirRoutes');

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/formulir', formulirRoutes);

// View Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/dashboard-admin', (req, res) => res.sendFile(path.join(__dirname, 'views', 'admin/dashboard.html')));
app.get('/mahasiswa/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'views', 'mahasiswa/dashboard.html')));
app.get('/formulir', (req, res) => res.sendFile(path.join(__dirname, 'views', 'mahasiswa/form-formulir.html')));

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running di http://localhost:${PORT}`);
});

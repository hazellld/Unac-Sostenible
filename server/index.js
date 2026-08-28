const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Endpoints
app.get('/api/ping', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Servidor Unac Sostenible respondiendo correctamente 🚀' 
  });
});

// Rutas de Puntos de Disposición
app.use('/api/disposal-points', require('./routes/disposalPointRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
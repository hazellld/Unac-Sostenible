const express = require('express');
const router = express.Router();
const DisposalPoint = require('../models/DisposalPoint');

// GET /api/disposal-points: Obtener todos los puntos activos
router.get('/', async (req, res) => {
  try {
    const points = await DisposalPoint.find({ active: true });
    res.json(points);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los puntos de disposición', error: error.message });
  }
});

// POST /api/disposal-points: Crear un nuevo punto de disposición
router.post('/', async (req, res) => {
  try {
    const newPoint = new DisposalPoint(req.body);
    const savedPoint = await newPoint.save();
    res.status(201).json(savedPoint);
  } catch (error) {
    res.status(400).json({ message: 'Error al guardar el punto de disposición', error: error.message });
  }
});

module.exports = router;

// DELETE /api/disposal-points: Eliminar TODOS los puntos (para limpieza)
router.delete('/', async (req, res) => {
  try {
    await DisposalPoint.deleteMany({});
    res.json({ message: 'Todos los puntos han sido eliminados' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar puntos', error: error.message });
  }
});

// DELETE /api/disposal-points/:id: Eliminar un punto específico por su ID
router.delete('/:id', async (req, res) => {
  try {
    await DisposalPoint.findByIdAndDelete(req.params.id);
    res.json({ message: 'Punto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el punto', error: error.message });
  }
});
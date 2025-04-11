const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

router.get('/', (req, res) => {
  const productos = productService.listarProductos();
  res.json(productos);
});

router.post('/', (req, res) => {
  const { nombre, precio } = req.body;
  try {
    const nuevoProducto = productService.agregarProducto(nombre, precio);
    res.status(201).json({ mensaje: 'Producto agregado', producto: nuevoProducto });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

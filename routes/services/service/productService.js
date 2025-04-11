const productData = require('../data/productData');

function listarProductos() {
  return productData.obtenerProductos();
}

function agregarProducto(nombre, precio) {
  if (!nombre || typeof precio !== 'number') {
    throw new Error('Datos inválidos. Se requiere nombre y precio numérico.');
  }
  return productData.insertarProducto({ nombre, precio });
}

module.exports = {
  listarProductos,
  agregarProducto
};

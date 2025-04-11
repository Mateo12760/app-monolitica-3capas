# App Monolítica vs 3 Capas

Este proyecto muestra dos versiones de una app de productos:

- ✅ **Monolítica**: toda la lógica en un solo archivo.
- ✅ **Tres Capas**: con separación en presentación, lógica y datos.

## Tecnologías
- Node.js
- Express.js
- JavaScript

## Rutas disponibles

### Listar productos
`GET /productos`

### Agregar producto
`POST /productos`  
```json
{
  "nombre": "Empanada",
  "precio": 1000
}

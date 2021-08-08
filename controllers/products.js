const db = require("../database/db.json");

const postProduct = (req, res) => {
  const ids = db.map((product) => product.id);
  const id = Math.max(...ids) + 1;
  db.push({
    id: id,
    name: req.body.name,
  });
  return res.status(201).json({
    success: "Producto creado con éxito",
  });
};

const getProducts = (req, res) => {
    return res.status(200).json(db);
};

const getProductById = (req, res) => {
  const paramId = parseInt(req.params.id);
  const filteredProducts = db.filter((product) => product.id === paramId);
  if (filteredProducts.length > 0) {
    return res.status(200).json({
      id: filteredProducts[0].id,
      name: filteredProducts[0].name,
      success: "Producto encontrado con éxito",
    });
  } else {
    return res.status(404).json({
      error: "Producto no encontrado",
    });
  }
};

const patchProductById = (req, res) => {
  const paramId = parseInt(req.params.id);
  const index = db.findIndex((product) => product.id === paramId);
  if (index >= 0) {
    return res.status(200).json({
      success: "Producto editado con éxito",
    });
  } else {
    return res.status(404).json({
      error: "Producto no encontrado",
    });
  }
};

const deleteProductById = (req, res) => {
  const paramId = parseInt(req.params.id);
  const index = db.findIndex((product) => product.id === paramId);
  if (index === -1) {
    return res.status(404).json({
      error: `Elemento con id ${paramId}, no encontrado`,
    });
  } else {
    db.splice(index, 1);
    return res.status(200).json({
      success: "Elemento eliminado con exito",
    });
  }
};

module.exports = {
    postProduct,
    getProducts,
    getProductById,
    patchProductById,
    deleteProductById
} 
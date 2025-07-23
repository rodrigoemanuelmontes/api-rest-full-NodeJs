import * as productModel from '../models/products.model.js';

export const getAllProducts = async () => {
  return await productModel.getAllProducts();
};

export const getById = async (id) => {
  if (!id || typeof id !== 'string') {
    const error = new Error('ID de producto inválido');
    error.status = 400;
    throw error;
  }

  const product = await productModel.getProductById(id);

  if (!product) {
    const error = new Error('Producto no encontrado');
    error.status = 404;
    throw error;
  }

  return product;
};

export const create = async (data) => {
  if (!data || typeof data !== 'object' || !data.nombre || !data.precio) {
    const error = new Error('Los datos del producto (nombre y precio) son requeridos.');
    error.status = 400;
    throw error;
  }

  return await productModel.createProduct(data);
};

export const remove = async (id) => {
  if (!id || typeof id !== 'string') {
    const error = new Error('ID de producto inválido para eliminar');
    error.status = 400;
    throw error;
  }

  const exists = await productModel.existsProduct(id);

  if (!exists) {
    const error = new Error('Producto no encontrado para eliminar');
    error.status = 404;
    throw error;
  }

  return await productModel.deleteProduct(id);
};

export const update = async (id, data) => {
  if (!id || typeof id !== 'string') {
    const error = new Error('ID de producto inválido para actualizar');
    error.status = 400;
    throw error;
  }

  if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    const error = new Error('Datos de actualización inválidos');
    error.status = 400;
    throw error;
  }

  const exists = await productModel.existsProduct(id);

  if (!exists) {
    const error = new Error('Producto no encontrado para actualizar');
    error.status = 404;
    throw error;
  }

  return await productModel.updateProduct(id, data);
};

const Joi = require('joi');

const id= Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
    name : name.requiere(),
    price: price.requiered(),
});

const updateProductSchema = Joi.object({
    name : name.requiere(),
    price: price.requiered(),
});

const getProductSchema = Joi.object({
    id : id.requiere(),
});

module.exports ={createProductSchema,updateProductSchema, getProductSchema }

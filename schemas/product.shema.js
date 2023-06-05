const Joi = require('joi');

const id= Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
    name : name.requiere(),
    price: price.requiered(),
    image: image.required(),
});

const updateProductSchema = Joi.object({
    name : name.requiere(),
    price: price.requiered(),
    image: image,
});

const getProductSchema = Joi.object({
    id : id.requiere(),
});

module.exports ={createProductSchema,updateProductSchema, getProductSchema }

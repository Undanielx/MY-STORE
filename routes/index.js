const productsRouter = require('./products.router');
//const userRouter = require('/users.router');

function routerApi(app){
  app.use('/products', productsRouter);
}

module.exports = routerApi;

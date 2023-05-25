const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=> {
 res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res)=> {
  res.send('Hola, soy la nueva ruta');
 });

 app.get('/products', (req, res)=> {
  res.json([
  {
    name: 'producto 1',
    price: 1000
  } ,
  {
    name: 'producto 2',
    price: 2000
  }
  ]);
 });

 app.get('/products/:id', (req, res)=>{
  const {id}= req.params;
  res.json({
    id,
    name: 'producto 2',
    price: 2000
  })
 })

 app.get('/categories/:categoryId/products/:productId', (req, res)=>{
  const {categoryId , productId}= req.params;
  res.json({
    categoryId,
    productId
  });
 })

app.listen(port, ()=> {
  console.log('Mi port' + port);
});

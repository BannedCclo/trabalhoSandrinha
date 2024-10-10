const express = require('express');
const Product = require('../model/produto');
const router = express.Router();

router.get('/test', ()=>{
    console.log('requisitou a api aq')
})

router.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
  console.log(products);
});

router.post('/products', async (req, res) => {
  const { title, description, category, price, quantity } = req.body;
  const newProduct = await Product.create({ title, description, category, price, quantity });
  res.json(newProduct);
});

router.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, category, price, quantity } = req.body;
  await Product.update({ title, description, category, price, quantity }, { where: { id } });
  res.json({ message: 'Produto atualizado com sucesso' });
});

router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.json({ message: 'Produto deletado com sucesso' });
});

module.exports =  router;
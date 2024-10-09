const express = require('express');
const Product = require('../model/produto');
const router = express.Router();

router.get('/test', ()=>{
    console.log('requisitou a api aq')
})

router.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.post('/products', async (req, res) => {
  const { name, email } = req.body;
  const newProduct = await Product.create({ name, email });
  res.json(newProduct);
});

router.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  await Product.update({ name, email }, { where: { id } });
  res.json({ message: 'Usuário atualizado com sucesso' });
});

router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.json({ message: 'Usuário deletado com sucesso' });
});

module.exports =  router;
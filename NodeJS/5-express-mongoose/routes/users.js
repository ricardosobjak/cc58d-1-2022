var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/User');

const isAuthorized = require('../middlewares/isAuthorized');

// Obter todos os usuários
router.get('/', isAuthorized, async function (req, res) {
  res.json(await User.find({}, { password: 0, __v: 0 }));
});

// Obter um usuário pelo ID
router.get('/:id', isAuthorized, async (req, res) => {
  const { id } = req.params;

  //const user = await User.findById(id);
  const user = await User.findOne({ _id: id }, { password: 0, __v: 0 });

  return user ? res.json(user) : res.status(404).send();
});


// Criar um usuário
router.post('/', async (request, response) => {
  // Obtendo o usuário a partir do corpo da requisição HTTP
  const userJson = request.body;
  userJson.createdAt = new Date();
  userJson.updatedAt = new Date();

  const user = new User(userJson);
  const hasErrors = user.validateSync(); // Validar schema de usuário

  return hasErrors
    ? response.status(400).json(hasErrors)
    : response.json(await user.save());
});



module.exports = router;

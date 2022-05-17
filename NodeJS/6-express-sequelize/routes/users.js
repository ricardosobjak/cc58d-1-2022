var express = require('express');
var router = express.Router();

const { User } = require('../database/models');

/* GET users listing. */
router.get('/', async function(req, res) {
  res.json(await User.findAll());  
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;

  res.json(await User.findByPk(id));
})

// Criar um usuário
router.post('/', async (req, res) => {
  const userJson = req.body;

  try {
    const user = await User.create(userJson);
    res.status(201).json(user);
  } catch(err) {
    console.log(err);
    res.status(400).json({message: "Falha..."});
  }
})

module.exports = router;

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../model/User');

const EXPIRES = 86400;

// Função auxiliar para gerar o token
const generateToken = (params = {}, timeout = EXPIRES) => {
    return jwt.sign(params, process.env.SECRET, {
        expiresIn: timeout
    });
}

// Definir uma rota de autenticação/login
router.post('/', async (req, res) => {
    // Obtemos os dados de autenticação via JSON
    const { login, password } = req.body;

    // Verificar se existe um usuário com a credencial informada
    const user = await User.findOne({ login, password });

    if (!user) // caso não exista um usuário cadastrado no DB
        return res.status(400).json({ message: "User not found" });


    user.password = undefined;

    // devolver o token
    const now = new Date();
    res.json({
        token: generateToken({ id: user.id }),
        user,
        loggedIn: now,
        expiresIn: new Date(now.getTime + EXPIRES * 1000)
    });
});



// última linha
module.exports = router;
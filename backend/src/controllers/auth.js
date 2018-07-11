const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
module.exports = app => {

    let controller = {};
    const modelUser = mongoose.model('users');

    controller.login = (req, res) => {

        let user = req.body;
        modelUser.findOne({ login: user.login, password: user.password })

            .then(result => {
                if (result) {
                    let token = jwt.sign({ date: new Date() }, app.get('secret'), { expiresIn: 86400 });
                    res.set('x-access-token', token); // adicionando token no cabeçalho de resposta
                    res.status(200).json({ auth: true, token: token });
                } else {
                    res.status(400).json({ auth: false });
                }
            })
            .catch(erro => {
                res.status(401).json({ auth: false });
            });

    }

    controller.auth = (req, res, next) => {
        console.log(req.headers)
        const token = req.headers['x-access-token']; // busca o token no header da requisição
        if (token) {
            jwt.verify(token, app.get('secret'), (err, decoded) => {
                if (err) {
                    console.log('teste')
                    return res.sendStatus(401);
                } else {
                    // guardou o valor decodificado do token na requisição. No caso, o login do usuário.
                    req.usuario = decoded;
                    next();
                }
            });
        } else {
            return res.sendStatus(401);
        }
        next();
    }


    return controller;

}
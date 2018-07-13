module.exports = app => {

    const authController = app.src.controllers.auth;

    app.post('/api/login', authController.login);

    app.use('/*', authController.auth);

    app.get('/api/validaToken', (req, res) => res.status(200).json({ auth: true }));

}


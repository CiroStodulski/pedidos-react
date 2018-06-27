module.exports = app => {

    const authController = app.src.controllers.auth;

    app.post('/api/login', authController.login);

    app.use('/*', authController.auth);


}
const { registerUser, loginUser } = require('../controllers/user.controller')


module.exports = (app) => {
    app.post('/api/registeruser', registerUser)

    app.post('/api/login', loginUser)
}


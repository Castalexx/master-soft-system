const { registerUser, loginUser, getUser} = require('../controllers/user.controller')


module.exports = (app) => {
    app.post('/api/registeruser', registerUser)

    app.post('/api/login', loginUser)

    app.get('/api/user', getUser )
}


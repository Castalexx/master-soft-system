const { addUser } = require('../controllers/user.controller')


module.exports = (app) => {
    app.post('/api/adduser', addUser)

}
const { addUser, deleteUser } = require('../controllers/user.controller')


module.exports = (app) => {
    app.post('/api/adduser', addUser)
    app.delete('/api/deleteuser/:id', deleteUser)
}
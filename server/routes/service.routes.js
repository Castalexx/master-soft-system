const { addService } = require('../controllers/service.controller');

module.exports = (app) => {

    app.post('/newservice', addService)
}

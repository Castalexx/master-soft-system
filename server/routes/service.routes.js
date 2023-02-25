const { addService, getServices, getOneService, editService, deleteService } = require('../controllers/service.controller');

module.exports = (app) => {

    app.get('/api/services', getServices);

    app.get('/api/service/:id', getOneService);

    app.post('/api/newservice', addService);

    app.put('/api/service/:id', editService);

    app.delete('/api/service/:id', deleteService)

}

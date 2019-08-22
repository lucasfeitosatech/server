const express = require('express');
const bodyParser = require('body-parser');
const routes = new express.Router();

routes.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  

const indexController = require('./controllers/IndexController');
const easytrackingController = require('./controllers/EasyTrackingController');
const autotreinamentoController = require('./controllers/AutotreinamentoController');

//Routes para IndexController
routes.get('/', indexController.index);

//Routes para EasyTrackingController
routes.get('/easytracking',easytrackingController.easytrackingRender);  
routes.post('/easytracking',easytrackingController.easytrackingPost);

//Routes para autotreinamento
routes.get('/autotreinamento/QA',autotreinamentoController.questionAndAnswers);
routes.get('/autotreinamento/links',autotreinamentoController.links);

module.exports = routes;
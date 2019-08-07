const express = require('express');
const devController = require('./controllers/DevController');
const likeController = require('./controllers/LikeController');
const dislikesController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', devController.index);
routes.post('/devs', devController.store);
routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/dislikes', dislikesController.store);

module.exports = routes;
module.exports = function(app) {
  var yfController = require('../controllers/yfController');

  app.route('/price/:stockId')
    .get(yfController.getCurrentPrice);
};
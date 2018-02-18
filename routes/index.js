var express = require('express');
var router = express.Router();
const api = require('../api');

/* GET home page. */
router.get('/keyboard', function(req, res, next) {
  res.send(api.test());
});

module.exports = router;

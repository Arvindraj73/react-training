let express = require('express');
let router = express.Router();
let MOCK_DATA = require('../MOCK_DATA.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(MOCK_DATA);
  res.json(MOCK_DATA);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const MOCK_DATA = require('./MOCK_DATA.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(MOCK_DATA);
  res.json(MOCK_DATA);
});

module.exports = router;

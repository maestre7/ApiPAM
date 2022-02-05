
let router = require('express').Router();

router.get('/person', require('../controllers/getsearchperson'));
router.get('/movie', require('../controllers/getsearchmovie'));

module.exports = router;
let router = require('express').Router();

router.get('/genre/movie/list', require('../controllers/getgenremovielist'));
router.get('/discover/movie', require('../controllers/getdiscovermovie'));
router.use('/movie', require('./movie'));
router.use('/person', require('./person'));

module.exports = router;
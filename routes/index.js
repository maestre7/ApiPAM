let router = require('express').Router();

router.get('/genre/movie/list', require('../controllers/getgenremovielist'));
router.get('/discover/movie', require('../controllers/getdiscovermovie'));
router.get('/news', require('../controllers/getnews'));
router.get('/birthday', require('../controllers/getbirthday'));
router.use('/movie', require('./movie'));
router.use('/person', require('./person'));
router.use('/search', require('./search'));

module.exports = router;
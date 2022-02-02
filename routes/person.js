
let router = require('express').Router();

router.get('/:id', require('../controllers/getpersonid'));
router.get('/:id/movie_credits', require('../controllers/getpersonidmoviecredits'));

module.exports = router;
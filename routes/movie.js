
let router = require('express').Router();

router.get('/upcoming', require('../controllers/getmovieupcoming'));
router.get('/:id', require('../controllers/getmovieid'));
router.get('/:id/credits', require('../controllers/getmovieidcredits'));
router.get('/:id/similar', require('../controllers/getmovieidsimilar'));

module.exports = router;
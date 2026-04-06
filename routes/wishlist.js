const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const wishlistController = require('../controllers/wishlistController');

router.get('/', auth, wishlistController.getWishlist);
router.post('/toggle/:id', auth, wishlistController.toggleWishlist);

module.exports = router;

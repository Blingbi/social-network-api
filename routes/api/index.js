const router = require('express').Router();
const userRoutes = require('./userroutes');
const thoughtRoutes = require('./thoughtroutes');

router.use('./thoughts', thoughtRoutes)
router.use('/users',userRoutes);

module.exports = router;
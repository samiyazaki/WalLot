const router = require('express').Router();
const userRoutes = require('./userRoutes');
const financeRoutes = require('./financeRoutes');

router.use('/users', userRoutes);
router.use('/finance', financeRoutes);

module.exports = router;
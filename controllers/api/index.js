const router = require('express').Router();
const userRoutes = require('./userRoutes');
const expenseRoutes = require('./expenseRoutes');
const incomeRoutes = require('./incomeRoutes');
const goalRoutes = require('./goalRoutes');

router.use('/users', userRoutes);
router.use('/expense', expenseRoutes);
router.use('/income', incomeRoutes);
router.use('/goal', goalRoutes);


module.exports = router;
const router = require('express').Router();
const { Expense, Income, Goal, User } = require('../models');
const withAuth = require('../utils/auth');


// router.get('/', async (req, res) => {
//   try {
    
//     const incomeData = await Income.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

   
//     const income = incomeData.get({ plain: true });
//     console.log(income);
    
//     res.render('homepage', { 
//       income, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// router.get('/', async (req, res) => {
//   try {
//     const allData = await Income.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });


//     const data = allData.map((data) => data.get({ plain: true }));
//     console.log(data);

//     res.render('homepage', { 
//       data, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/finance/:id', async (req, res) => {
//   try {
//     const userData = await Finance.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const finance = financeData.get({ plain: true });

//     res.render('dashboard', {
//       ...finance,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/income/:id', async (req, res) => {
  try {
    const incomeData = await Income.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const income = incomeData.get({ plain: true });
    console.log(income);

    res.render('income', {
      ...income,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', (req, res) => {

  res.render('dashboard');
});

router.get('/income', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Income }],
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('income', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

router.get('/income', (req, res) => {
  res.render('income');
});

router.get('/goals', (req, res) => {

  res.render('goals');
});

router.get('/expenses', (req, res) => {

  res.render('expenses');
});

router.get('/', (req, res) => {

  res.render('homepage');
});

router.get('/plan', (req, res) => {

  res.render('plan');
});
module.exports = router;
const router = require('express').Router();
const { Expense, Income, Goal, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/income/:id', withAuth, async (req, res) => {
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
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/plans/:id', withAuth, async (req, res) => {
  try {
    const incomeData = await Income.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Goal
        }
      ],
    });

    const income = incomeData.get({ plain: true });
    console.log(income);

    res.render('plans', {
      ...income,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/plans', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Income }, { model: Goal }],
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('plans', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, (req, res) => {

  res.render('dashboard', {logged_in: true });
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

router.get('/goals', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Goal }],
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('goals', {
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

router.get('/goals', withAuth, (req, res) => {

  res.render('goals', {logged_in: true });
});

router.get('/expenses', withAuth, (req, res) => {

  res.render('expenses', {logged_in: req.session.logged_in});
});

router.get('/credit', withAuth, (req, res) => {

  res.render('credit', {logged_in: true });
});

router.get('/', (req, res) => {
  
  res.render('homepage', {logged_in: req.session.logged_in});

});

router.get('/taxes', withAuth, (req, res) => {

  res.render('taxes', {logged_in: true });
});

module.exports = router;
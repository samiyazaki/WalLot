const router = require('express').Router();
const { Income } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newIncome = await Income.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newIncome);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/', withAuth, async (req, res) => {
    try {
      const newIncome = await Income.update({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newIncome);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
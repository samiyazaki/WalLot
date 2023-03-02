const router = require('express').Router();
const { Goal } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newGoal = await Goal.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/', withAuth, async (req, res) => {
    try {
      const goalData = await Goal.update(req.body, {
        where: {
        user_id: req.session.user_id,
        },
      });
      if (!goalData) {
        res.status(404).json({ message: 'No goal with this id!' });
        return;
      }
      res.status(200).json(goalData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
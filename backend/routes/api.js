const express = require('express');
const router = express.Router();
const { getGoal, setGoal, createGoal, deleteGoal } = require('../controllers/taskController')

router.route('/').get(getGoal).post(setGoal);

router.route('/:id').delete(deleteGoal).put(createGoal);

module.exports = router;


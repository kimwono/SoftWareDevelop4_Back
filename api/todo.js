const express = require('express');
const router = express.Router();

const { router: addRouter, userTasks } = require('./todo/add');
const moveRouter = require('./todo/move');
const deleteRouter = require('./todo/delete');

// 모든 작업 가져오기
router.get('/:user', (req, res) => {
    const { user } = req.params;
    res.json(userTasks[user] || { todo: [], inProgress: [], done: [] });
});

router.use('/add', addRouter);
router.use('/move', moveRouter);
router.use('/delete', deleteRouter);

module.exports = router;

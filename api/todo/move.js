const express = require('express');
const router = express.Router();
const { userTasks } = require('./add');

router.put('/', (req, res) => {
    const { task, fromStatus, toStatus, user } = req.body;
    if (task && fromStatus && toStatus && user && userTasks[user]) {
        userTasks[user][fromStatus] = userTasks[user][fromStatus].filter(t => t !== task);
        userTasks[user][toStatus].push(task);
        res.json({ message: '작업 상태가 성공적으로 변경되었습니다.' });
        console.log("move",req.body);
    } else {
        res.status(400).json({ message: '작업, 이전 상태, 새 상태, 사용자 정보가 모두 필요합니다.' });
    }
});

module.exports = router;

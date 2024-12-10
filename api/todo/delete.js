const express = require('express');
const router = express.Router();
const { userTasks } = require('./add');

router.delete('/', (req, res) => {
    const { task, status, user } = req.body;
    if (task && status && user && userTasks[user]) {
        userTasks[user][status] = userTasks[user][status].filter(t => t !== task);
        res.json({ message: '작업이 성공적으로 삭제되었습니다.' });
        console.log("delete",req.body);
    } else {
        res.status(400).json({ message: '작업, 상태, 사용자 정보가 모두 필요합니다.' });
    }
});

module.exports = router;

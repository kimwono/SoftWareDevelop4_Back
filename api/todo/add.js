const express = require('express');
const router = express.Router();

let userTasks = {};

router.post('/', (req, res) => {
    const { task, user } = req.body;
    if (task && user) {
        if (!userTasks[user]) {
            userTasks[user] = { todo: [], inProgress: [], done: [] };
        }
        userTasks[user].todo.push(task);
        res.status(201).json({ message: '작업이 성공적으로 추가되었습니다.' })
        console.log("add",req.body);
    } else {
        res.status(400).json({ message: '작업 내용과 사용자 정보가 필요합니다.' });
    }
});

module.exports = { router, userTasks };

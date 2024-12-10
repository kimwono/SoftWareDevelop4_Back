const express = require('express');
const router = express.Router();
const { userdata, addUser } = require('./userData');



// ID 중복 체크 라우트
router.get('/idCheck/:id', (req, res) => {
    const id = req.params.id;
    const idCheck = userdata.some(user => user.id === id);
    res.send({ "ok": !idCheck });
});

// 회원가입 라우트
router.get('/:id/:pwd/:name/:age', (req, res) => {
    const { id, pwd, name, age } = req.params;

    const idCheck = userdata.some(user => user.id === id);

    if (idCheck) {
        res.send({ "ok": false });
    } else if (id && pwd && name && age) {
        const newUser = { id, pwd, name, age };
        addUser(newUser);
        console.log("회원가입 완료 :", userdata);
        res.send({ "ok": true });
    } else {
        res.send({ "ok": false });
    }
});

module.exports = router;

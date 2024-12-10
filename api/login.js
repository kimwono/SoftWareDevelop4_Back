const express = require('express');
const router = express.Router();
const { userdata } = require('./userData');



// 로그인 라우트
router.get('/:id/:pwd', (req, res) => {
    const id = req.params.id;
    const pwd = req.params.pwd;

    if (id && pwd) {
        const user = userdata.find(user => user.id === id && user.pwd === pwd);

        if (user) {
            res.send({
                "ok": true,
                user: { id: user.id, pwd: user.pwd, name: user.name, age: user.age }
            });
        } else {
            res.send({ "ok": false });
        }
    } else {
        res.send({ "ok": false });
    }
});

module.exports = router;

const express = require('express');
const cors = require('cors');
const loginRoutes = require('./api/login'); // 로그인 관련 라우트 불러오기
const signupRoutes = require('./api/signup'); // 회원가입 관련 라우트 불러오기
const todoRoutes = require('./api/todo');

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

// 기본 경로 설정
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// API 라우트 사용
app.use('/api/login', loginRoutes); // '/api/login' 경로에 loginRoutes를 연결
app.use('/api/signup', signupRoutes); // '/api/signup' 경로에 signupRoutes를 연결
app.use('/api/todo', todoRoutes);


// 서버 실행
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

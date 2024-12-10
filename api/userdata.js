let userdata = [
    { id: '1', pwd: '123', name: '김원오', age: '25' },
    { id: '2', pwd: '123', name: '이준우', age: '25' },
    { id: '3', pwd: '123', name: '박지환', age: '25' },
    { id: '4', pwd: '123', name: '임시헌', age: '25' }
];

const addUser = (newUser) => {
    userdata.push(newUser);
};

module.exports = { userdata, addUser };

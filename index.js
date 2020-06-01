const express = require('express');
const app = express();

//create user data:
const userInfoData = [

    {
        id : 1,
        firstname : 'Amit',
        lastname : 'Singh',
        mobile: 1234
    },
    {
        id : 2,
        firstname : 'Ankit',
        lastname : 'Singh',
        mobile: 5678
    },
    {
        id : 3,
        firstname : 'Dravesh',
        lastname : 'Kumar',
        mobile: 9012
    },
    {
        id : 4,
        firstname : 'Shashi',
        lastname : 'Singh',
        mobile: 3456
    },
];

//create end points:
app.get('/api/users',function(req,res){
    res.json(userInfoData);
})

app.get('/api/info',function(req,res){
    res.send('Welcome to amit automation node api learning...');
})

app.get('/api/users/:id',function(req,res){
    const id = req.params.id;
    const user = userInfoData.find(user => user.id == id)

    if (user) {
       res.json(user) 
    } else {
       res.send('this id not valid please enter valid id...') 
    }
})

//start the node server
const PORT = 3001;
app.listen(PORT,function(){
    console.log('Server is started, please call your apis...')
})
//node modules initialisation
require('dotenv').config()
const _ = require('lodash');
const ejs = require('ejs');
const mongoose = require('mongoose');
const express = require('express');

//calling express
const app = express();
const d = new Date(); const year = d.getFullYear();
const codename = "Project Leo";
let name;


mongoose.connect('mongodb://localhost:27017/leoDb',  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//schemas declaration
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const sudoUserSchema = new mongoose.Schema({
    email: String,
    password: String
});

const SudoUser = mongoose.model('SudoUser', sudoUserSchema);

const alpha = new SudoUser({
    email: '1@2.com',
    password: '12345'
});

//alpha.save();


//routes
app.route('/')
.get ((req, res) => {
    res.render('login/index', {title: codename, date: year});
})

.post((req, res)=>{
    name = req.body.nom;
    mail = req.body.mail;
    res.redirect('/forum');
});

app.route('/forum')
.get((req, res)=>{
    // if user is logged in then enter

    res.render('main/admin-room' , {//change to client room
        title: codename,
        date: year
    });
});

app.route('/admin')
.get((req, res)=>{
    res.render('login/admin', {
        title: codename,
        date: year
    });
})
.post((req, res)=>{
    sudoMail = req.body.mail;
    sudoKey = req.body.password;

    res.redirect('/')
})

app.get('/client', (req, res) =>{
    res.render('main/c-room',{
        title: codename,
        date: year
    });
});

// io.use((socket, next) => {
//     let handshake = socket.handshake;
//     // ...
//   });
  
//   io.on("connection", (socket) => {
//     let handshake = socket.handshake;
//     // ...
//   });



let collection = [];

//creating http server for socket.io (not required in plain express..) 
let server = require('http').createServer(app);

//requiring the socket.io module; cors: {origin: '*'} is just incase there are some errors.
let io = require('socket.io')(server, {cors: {origin: "*"}});




io.on('connection', (socket) => {
    let UserProfile = {
        name: name,
        id: socket.id
    }
    collection.push(UserProfile);


    socket.on('passingUser', (e) => {
        const profile = {
            nom: e,
            id: socket.id
        };
        collection.push(profile);
        updateOfUsers();
    });
    console.log('a user is connected with id: ' + socket.id);

    function updateOfUsers() {
        socket.emit('receiveUsers', collection);
    };

    socket.on('disconnect', (data) => {
        collection.forEach( e => {
            if (socket.id === e.id ) {
                collection.splice(collection.indexOf(e), 1);
            }
        });
        updateOfUsers();
        socket.emit('userLeft', socket.id);
    });


    socket.on('newMessage', (data) => {
        socket.emit('receiveNewMessage', {msg: data, id: socket.id});
    });

});


//creating a listen port for the server
server.listen(4040, () => {
    console.log("SERVER is listening on port: 4040");
});
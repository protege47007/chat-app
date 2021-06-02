//node modules initialisation
const _ = require('lodash');
const ejs = require('ejs');
const express = require('express');
const bp = require('body-parser');

//calling express
const app = express();


app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bp.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.render('home', {title: "Project Leo"});
});


















let collection = [];

//creating http server for socket.io (not required in plain express..) 
let server = require('http').createServer(app);

//requiring the socket.io module; cors: {origin: '*'} is just incase there are some errors.
let io = require('socket.io')(server, {cors: {origin: "*"}});

//creating a listen port for the server
server.listen(4040, () => {
    console.log("SERVER is listening on port: 4040");
});


io.on('connection', (socket) => {
  
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



$(document).ready(function () {
    //server connection from the client been established
    const socket = io("http://localhost:4040");
    socket.on("connection");
  
    //goes here//variables declaration
    let user;
    let reg = document.querySelector("#details");

    reg.submit((e) => {
        e.preventDefault();
        user = document.querySelector("#username").value;
        $('.content').addClass('.hidden');
        $('.chat').removeClass('.hidden');

        //passing the user's name from the registration form on home page.
        socket.emit("passingUserNom", user);
    });

    let users;
    //receiving the user database from the server
    socket.on("receiveUsers", (data) => {
        //users array
        users = data;
        users.forEach((e) => {
            $(".users").append('<p class="user">' + e.name + "</p>");
        });
    });
    socket.on("userLeft", (data) => {
        users.forEach( e => {
            if (data === e.id ) {
                $(".users").append('<p class="user">' + e.name + " left.. </p>");
                users.splice(users.indexOf(e), 1);
            }
        });
    });
    
    
    //forum message emitter to the server
    const sendMessage = () => {
      let e = $("#message").value;
      socket.emit("newMessage", e);
    };
    //forum message updater from the server
    socket.on("receiveNewMessage", (data) => {
      users.forEach((e) => {
          if (e.id === data.id){
            $(".user-id").text(e.name);
          }
      });
      $('.txt').text(': ' + data.msg + '<br>');
    });

    let sendMessage = function (data, user) {
        if(user === undefined){
            socket.emit('newMessage', $(data).value);
        }
        else{
            let e = users.indexOf(user);
            io.to(users[e].id).emit($(data).value);
        }
    }

    
  
});

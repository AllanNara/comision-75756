const messages = [];

export default io => {
  io.on("connection", (socket) => {
    console.log("Usuario conectado con id: " + socket.id)
    
    socket.on("login", (username) => {
      socket.broadcast.emit("new-user", username)
    })

    socket.emit("all-msgs", messages)

    socket.on("new-message", (msg) => {
      messages.unshift(msg);
      io.emit("all-msgs", messages)
    })
  })
}



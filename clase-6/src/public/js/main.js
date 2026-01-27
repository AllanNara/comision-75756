const socket = io()

let username
while(!username) {
  username = prompt("Ingrese nombre de usuario")
}

socket.emit("login", username)
socket.on("new-user", (newUser) => alert(`${newUser} se ha conectado!`))

const box = document.querySelector("#box")

socket.on("all-msgs", (msgs) => {
  if(!msgs.length) {
    box.innerHTML = "<p>No hay mensajes... ¡Se el primero!</p>"
  } else {
    const newMessagesHtml = msgs.reduce((acc, msg) => {
      return acc + `<p><strong>${msg.username}</strong> dice: ${msg.message}</p>` 
    }, "")
    box.innerHTML = newMessagesHtml
  }
})

const inputMsg = document.querySelector("#input-msg")

inputMsg.addEventListener("keypress", (e) => {
  const message = inputMsg.value.trim()
  if(e.key === "Enter" && message) {
    e.preventDefault();
    const objectMessage = { username, message }
    socket.emit("new-message", objectMessage)
    inputMsg.value = ""
  }
})

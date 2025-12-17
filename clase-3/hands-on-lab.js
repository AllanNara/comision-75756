const crypto = require("crypto")

class UsersManager {
  static #users = [];

  static createUser(userObject) {
    const { first_name, last_name, email, password } = userObject;
    if(!email || !password) return console.error("Faltan datos importantes");
    
    const user = {
      id: UsersManager.#users.length ? UsersManager.#users[UsersManager.#users.length - 1].id + 1 : 1,
      first_name,
      last_name,
      email,
      password: UsersManager.#createHash(password),
    };
    
    UsersManager.#users.push(user)
    console.log("User created successfully");
  }

  static showUsers() {
    console.log(UsersManager.#users)
  }

  static login(email, password) {
    const foundUser = UsersManager.#users.find(u => u.email === email);
    if(foundUser && UsersManager.#validatePassword(password, foundUser)) {
      console.log("Usuario logeado exitosamente");
    } else {
      console.error("Credenciales invalidas")
    }
  }

  static #createHash(password) {
    const hash = crypto.pbkdf2Sync(password, "mi gato bonito", 100, 26, "sha3-256")
    return hash.toString("hex")
  }

  static #validatePassword(password, user) {
    const hash = UsersManager.#createHash(password)
    return hash === user.password
  }
}

UsersManager.createUser({
  first_name: "juan",
  last_name: "gaviria",
  email: "juanga@mail.co",
  password: "unodostres"
})

UsersManager.createUser({
  first_name: "maria",
  last_name: "gaviria",
  email: "marigavi@mail.co",
  password: "trescuatro"
})

// UsersManager.showUsers()

UsersManager.login("juanga@mail.co", "unodostres")
UsersManager.login("marigavi@mail.co", "trescuatro")
UsersManager.login("juanga@mail.co", "trescuatrocinco")


class Contador {
  static contadorGlobal = 0

  constructor(responsable) {
    this.responsable = responsable
    this.contador = 0
  }

  getResponsable() {
    return `${this.responsable} es el responsable de este contador`
  };

  contar() {
    this.contador++ // HACE REFERENCIA A LA INSTANCIA QUE SE VA A CREAR
    Contador.contadorGlobal++ // HACE REFERENCIA A LA CLASE, NO A LA INSTANCIA
  };

  getCuentaIndividual() {
    return `${this.contador} es tu cuenta individual`  
  };

  getCuentaGlobal() {
    return `${Contador.contadorGlobal} es la cuenta global`  
  };
  
}

const contadorUno = new Contador("john")
const contadorDos = new Contador("jane")

console.log({contadorUno, contadorDos, cuentaGlobal: Contador.contadorGlobal})

contadorUno.contar();
contadorUno.contar();
contadorUno.contar();

contadorDos.contar();

// console.log({contadorUno, contadorDos, cuentaGlobal: Contador.contadorGlobal})

// console.log(contadorUno.getCuentaIndividual())
// console.log(contadorUno.getCuentaGlobal())
// console.log(Contador.contadorGlobal)



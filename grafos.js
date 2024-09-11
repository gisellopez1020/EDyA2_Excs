class Persona {
  constructor(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
  }
}

class Ciudad {
  constructor(nombre) {
    this.nombre = nombre;
    this.residentes = [];
  }

  agregarPersona(persona) {
    this.residentes.push(persona);
  }

  listarResidentes() {
    return this.residentes
      .map((persona) => `${persona.nombre}, ${persona.edad} años`)
      .join("\n");
  }
}

let ciudad1 = new Ciudad("Madrid");
let ciudad2 = new Ciudad("Barcelona");

let persona1 = new Persona("Juan", 25, ciudad1);
let persona2 = new Persona("Ana", 30, ciudad1);
let persona3 = new Persona("Luis", 20, ciudad2);

ciudad1.agregarPersona(persona1);
ciudad1.agregarPersona(persona2);
ciudad2.agregarPersona(persona3);

function imprimirResidentes(ciudad) {
  console.log(`Residentes de ${ciudad.nombre}:`);
  console.log(ciudad.listarResidentes());
}

imprimirResidentes(ciudad1);

imprimirResidentes(ciudad2);

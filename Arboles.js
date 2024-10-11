class Persona {
    constructor(nombreCompleto, fechaNacimiento) {
        this.nombreCompleto = nombreCompleto;
        this.fechaNacimiento = fechaNacimiento;
        this.hijos = [];
    }

    añadirHijo(hijo) {
        this.hijos.push(hijo);
    }
}

class ArbolGenealogico {
    constructor(raiz) {
        this.raiz = raiz;
    }

    // Recorrido en preorden
    preorden(persona) {
        if (persona) {
            console.log(`${persona.nombreCompleto} nació el ${persona.fechaNacimiento}`);
            for (let hijo of persona.hijos) {
                this.preorden(hijo);
            }
        }
    }

    // Recorrido en postorden
    postorden(persona) {
        if (persona) {
            for (let hijo of persona.hijos) {
                this.postorden(hijo);
            }
            console.log(`${persona.nombreCompleto} nació el ${persona.fechaNacimiento}`);
        }
    }

    // Recorrido en orden
    enOrden(persona) {
        if (persona) {
            if (persona.hijos.length > 0) {
                this.enOrden(persona.hijos[0]);
            }
            console.log(`${persona.nombreCompleto} nació el ${persona.fechaNacimiento}`);
            if (persona.hijos.length > 1) {
                this.enOrden(persona.hijos[1]);
            }
        }
    }
}

// Abuelos paternos
const cesar = new Persona("César López", "18/02/1942");
const luz = new Persona("Luz Marina Sánchez", "02/01/1950");

// Abuelos maternos
const arnulfo = new Persona("Arnulfo Ordoñez", "20/02/1942");
const oliva = new Persona("Oliva Tobar", "25/09/1947");

// Padres
const edinson = new Persona("Edinson López", "27/06/1980");
const sandra = new Persona("Sandra Ordoñez", "26/03/1980");

// Hijos
const karen = new Persona("Karen Gisel López", "20/10/2005");
const jhoselyn = new Persona("Jhoselyn López", "05/03/2014");


cesar.añadirHijo(edinson);
luz.añadirHijo(edinson)
oliva.añadirHijo(sandra)
arnulfo.añadirHijo(sandra);
edinson.añadirHijo(jhoselyn);
edinson.añadirHijo(karen);
sandra.añadirHijo(jhoselyn);
sandra.añadirHijo(karen);

const arbolGenealogico = new ArbolGenealogico(cesar);

console.log("Recorrido en Preorden:");
arbolGenealogico.preorden(arbolGenealogico.raiz);

console.log("\nRecorrido en Postorden:");
arbolGenealogico.postorden(arbolGenealogico.raiz);

console.log("\nRecorrido en Orden:");
arbolGenealogico.enOrden(arbolGenealogico.raiz);
class NodoTODO {
    constructor(titulo, descripcion, siguiente = null) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.siguiente = siguiente;
    }
}

class ListaTODOs {
    constructor() {
        this.cabeza = null;
    }

    agregarTODO(titulo, descripcion) {
        const nuevoNodo = new NodoTODO(titulo, descripcion);

        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    mostrarTODOs() {
        let actual = this.cabeza;
        while (actual) {
            console.log(`Título: ${actual.titulo}\nDescripción: ${actual.descripcion}\n`);
            actual = actual.siguiente;
        }
    }
}

const listaDeTODOs = new ListaTODOs();

listaDeTODOs.agregarTODO('Comprar el desayuno', 'Comprar leche, huevos y pan.');
listaDeTODOs.agregarTODO('Hacer ejercicio', 'Correr 5 km en el parque.');
listaDeTODOs.agregarTODO('Estudiar JavaScript', 'Completar los ejercicios.');
listaDeTODOs.agregarTODO('Pensar en el proyecto', 'Investigar una idea para el proyecto final.');

listaDeTODOs.mostrarTODOs();
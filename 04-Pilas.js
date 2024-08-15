class Libro{
    constructor(){
        this.libro = {}
        this.count = 0
    }
    push(element){
        this.libro[this.count] = element
        this.count++
        return this.libro
    }
    pop(){
        this.count--;
        const element = this.libro[this.count]
        delete this.libro[this.count]
        return element
    }
    peek(){
        return this.libro[this.count - 1]
    }
    size(){
        return this.count
    }
    print(){
        console.log(this.libro)
    }
}

const libro = new Libro();
const l1 = {
    Nombre: 'Cien años de soledad', 
    ISBN: 123456,
    Autor: 'Gabriel García Márquez',
    Editorial: 'Panamericana'
}

const l2 = {
    Nombre: 'Hojarrasca', 
    ISBN: 58169,
    Autor: 'Gabriel García Márquez',
    Editorial: 'Panamericana'
}
const l3 = {
    Nombre: 'El principito', 
    ISBN: 752196,
    Autor: 'Antoine de Saint-Exupéry',
    Editorial: 'Nacional'
}
const l4 = {
    Nombre: 'La culpa es de la vaca', 
    ISBN: 28964,
    Autor: 'Jaime Lopera y Marta Bernal',
    Editorial: 'Planeta de libros'
}
const l5 = {
    Nombre: 'Anne of Green Gables', 
    ISBN: 28964,
    Autor: 'Lucy Maud Montgomery',
    Editorial: 'Emecé'
}

console.log(libro.push(l1))
console.log(libro.push(l2))
console.log(libro.push(l3))
console.log(libro.push(l4))
console.log(libro.push(l5))
libro.print()
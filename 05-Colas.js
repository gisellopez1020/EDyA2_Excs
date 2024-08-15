class ATM{
    constructor(){
        this.atm = []
    }
    enqueue(element){
        this.atm.push(element)
        return this.atm
    }
    dequeue(){
        return this.atm.shift()
    }
    peek(){
        return this.atm[0]
    }
    size(){
        return this.atm.lenght
    }
    isEmpty(){
        return this.atm.lenght === 0
    }
    print(){
        return this.atm
    }
}

const atm = new ATM()
const p1 = {
    Nombre: 'Juan Carlos',
    Tiempo_llegada: '9:00'
}
const p2 = {
    Nombre: 'Alexa',
    Tiempo_llegada: '13:00'
}
const p3 = {
    Nombre: 'Camilo',
    Tiempo_llegada: '7:30'
}
const p4 = {
    Nombre: 'Karla',
    Tiempo_llegada: '16:50'
}

console.log(atm.enqueue(p1))
console.log(atm.enqueue(p2))
console.log(atm.enqueue(p3))
console.log(atm.enqueue(p4))
atm.print()
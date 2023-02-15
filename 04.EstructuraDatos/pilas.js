//* SIMULAR NUESTRA PROPIA PILA DE JAVASCRIPT
//* CLASE PILA "APILAR DATOS " ITERANDO INSTANCIAS DE ESA CLASE (OBJETOS)

class Pila {
    constructor(){
        this.stack = []; //* stack o pila está vacio
    }
    //METODOS DE NUESTRA PILA
    
    push(data){ //apilamos
        this.stack.push(data)
    }

    pop(){  //desapilar
        return this.stack.pop()
    }

    peek(){
        if(this.stack.length < 1){
            return null
        }
        return this.stack[this.stack.length - 1 ]
    }

    print(){
        console.log(this.peek())
    }

    printStack(){
        console.log(this.stack)
    }

    size(){
        return this.stack.length
    }
}

let stack = new Pila()

stack.print()
console.log(stack.size())

stack.push(1)
stack.print
console.log(stack.print())
stack.push(2)
stack.print
console.log(stack.print())
stack.push(3)
stack.print
console.log(stack.print())
stack.push(4)
stack.print()
console.log(stack.print())
console.log(stack.size())
stack.printStack()
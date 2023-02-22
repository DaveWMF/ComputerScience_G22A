// Variables


// Funciones
/**
 * Función que busca un número de forma lineal y ascendente
 *
 * @param {*} arreglo Arreglo en donde se buscará el número
 * @param {*} datoABuscar Es el número o valor que se buscará en el arreglo
 * @returns
 */
function buscarLinealmente(arreglo, datoABuscar){
    let i
    for(i = 0; i<arreglo.length; i++){
        if(arreglo[i] == datoABuscar){
            console.log("Encontré tu elemento "+ datoABuscar)
            // Regresamos cuantos pasos me tardé
            return i+1
        }
    }
    console.log("No encontré tu elemento "+ datoABuscar)
    return i+1
}

function buscarDeFormaBinaria(arreglo, datoABuscar){
    arreglo.sort((a,b)=>{return a-b})

    let min = 0;
    let max = arreglo.length-1;
    let mitad;
    let iteraciones = 0;

    while(min <= max){
        iteraciones++;

        mitad = Math.floor((min + max)/2)

        // Comparar
        // Buscamos si el elemento es el que buscamos
        if(datoABuscar == arreglo[mitad]){
            console.log("La busqueda binaria tardó "+ iteraciones+ " iteraciones y lo encontró en "+ mitad)
            // Posicion de mi dato encontrado
            return mitad
        }else if(datoABuscar > arreglo[mitad]){
            min = mitad + 1
        }else{
            max = mitad -1
        }

    }
    console.log("No encontró y se tardó " + iteraciones + " iteraciones")
    return -1
}

// Ejecucion de código

let numeros = [2,4,5,7,9,11,15,28,30,43,90,100,203]
let numeroABuscar = 90

console.log("Pasos: "+buscarLinealmente(numeros, numeroABuscar))
console.log("Posicion (Busqueda Binaria): " + buscarDeFormaBinaria(numeros, numeroABuscar))

let lista2 = [5,6,1233,1231412,34563456345,21341341341234]
let numeroABuscar2 = 3

console.log("Pasos: "+buscarLinealmente(lista2, numeroABuscar2))
console.log("Posicion (Busqueda Binaria): " + buscarDeFormaBinaria(lista2, numeroABuscar2))
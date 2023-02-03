class Estudiante{
    // Atributo privado
    #calificacion
    constructor(id, nombre, aP, aM, edad, sexo){
        this.id = id
        this.nombre = nombre
        this.apellidoPaterno = aP
        this.apellidoMaterno = aM
        this.edad = edad
        this.sexo = sexo
        this.materias = []
        this.#calificacion = 0
    }

    agregarMatera(nombreMateria){
        this.materias.push(nombreMateria)
    }

    setCalificacion(numero){
        this.#calificacion = numero
    }

    estaAprobado(){

        // return (this.#calificacion > 6) ? "Aprobado": "Reprobado" ;
        if(this.#calificacion > 6){
            console.log("Esta aprobado")
            return "Aprobado"
        }else{
            console.log("Esta reprobado")
            return "Reprobado"
        }
        
        // return (this.calificacion > 6);
    }

    componente(){
        return `
        <section id="estudiante-${this.id}">
            <h2>${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}</h2>
            <p>${(this.estaAprobado() == "Aprobado") ? "Aprobadísimo": "Reprobadísimo"}</p>
        </section>
        `
        /**
         * 
         * 
         * return "<section id='estudiante-" + this.id+ "'>" +
         *  "<h2> " + this.nombre+ " " + this.apellidoPaterno + " " + this.apellidoMaterno + "</h2>"
         * 
         * 
         */
    }

    cambiarColor(){
        // Construye "estudiante-0" "estudiante-1" ""
        
        document.querySelector("#estudiante-" + this.id).style.backgroundColor = "#AAEEFF"
    }
}

let alumno1 = new Estudiante(0, "Braulio", "Gomez", "Díaz", 20, "Hombre")
let alumno2 = new Estudiante(1, "Paula", "Spindola", "Jurado", 20, "Mujer")
let alumno3 = new Estudiante(2, "Davicho", "Ayam", "Farco", 20, "Hombre")
let alumno4 = new Estudiante(3, "Yunnuen", "Acosta", "Meza", 20, "Mujer")
 

// Para querySelector
// # - identificador o id
// . - clases o class
// nada - nombre de la etiqueta

//----Selecciono elemento ------------|-------Manipulo elemento----------
document.querySelector("#estudiantes").innerHTML += (alumno1.componente())
document.getElementById("estudiantes").innerHTML += (alumno2.componente())
document.querySelector("#estudiantes").innerHTML += (alumno3.componente())
document.querySelector("#estudiantes").innerHTML += (alumno4.componente())

// Como obtener datos?
// 

// Tarea - Hacer una lista que modifique el color segun si esta aprobado o reprobado
// EXTRA
// Calcular el promedio si es <8 esta aprobado
// Imprimir por separado los alumnos aprobados y reprobados
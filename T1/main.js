
let alumnos = []

class Alumno{
    constructor(nombre, aP, aM, calificacion){
        this.id = (alumnos.length > 0) ? alumnos[alumnos.length-1].id + 1 : 0
        this.nombre = nombre
        this.aP = aP
        this.aM = aM
        this.calificacion = calificacion
    }

    estaAprobado(){
        return this.calificacion >= 6;
    }

    componente(){
        return `
        <div id="alumno-${this.id}" style='background-color:${(this.estaAprobado())?"#e8efdb": "#efe2db"};border: 1px solid ${(this.estaAprobado())?"green": "red"}'>
            <h4>${this.nombre} ${this.aP} ${this.aM}</h4>
            <p>Calificación: ${this.calificacion}</p>
        </div>
        `
    }
}

function agregarAlumno(){
    // document.querySelectorAll("#") // Varios Id
    // document.querySelectorAll(".") // Varias Clases
    // document.querySelectorAll("input") // Varios Nombres de etiqueta

    // document.querySelector("#")
    // document.querySelector(".")
    // document.querySelector("input")
    
    let nuevoAlumno = new Alumno(document.querySelector("#nombre").value,
    document.querySelector("#aP").value,
    document.querySelector("#aM").value,
    parseInt(document.querySelector("#calificacion").value))

    alumnos.push(nuevoAlumno)

    mostrarAlumnos()
    mostrarAlumnosA()
    mostrarAlumnosR()
}

function mostrarAlumnos(){
    let nodo = document.querySelector("#alumnos")

    nodo.innerHTML = ""
    let filtrados = []
    if (document.querySelector("#cbAprobados").checked){
        //filtrados = filtrados.concat(alumnos.filter((alumno)=> alumno.estaAprobado()))

        for(let i = 0; i<alumnos.length; i++){
            if(alumnos[i].estaAprobado()){
                filtrados.push(alumnos[i])
            }
        }
    }
    if(document.querySelector("#cbReprobados").checked){
        //filtrados = filtrados.concat(alumnos.filter((alumno)=> !alumno.estaAprobado()))
        for(let i = 0; i<alumnos.length; i++){
            if(! alumnos[i].estaAprobado()){
                filtrados.push(alumnos[i])
            }
        }
    }
    // filtrados.forEach((alumno)=>{
    //     nodo.innerHTML += alumno.componente()
    // })

    for(let i = 0; i< filtrados.length; i++){
        nodo.innerHTML += filtrados[i].componente()
    }
}

function mostrarAlumnosA(){
    let nodo = document.querySelector("#alumnosA")

    nodo.innerHTML = ""
    alumnos.filter((alumno)=> alumno.estaAprobado()).forEach((alumno)=>{
        nodo.innerHTML += alumno.componente()
    })
}

function mostrarAlumnosR(){
    let nodo = document.querySelector("#alumnosR")

    nodo.innerHTML = ""
    alumnos.filter((alumno)=> !alumno.estaAprobado()).forEach((alumno)=>{
        nodo.innerHTML += alumno.componente()
    })
}
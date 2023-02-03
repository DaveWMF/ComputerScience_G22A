class Felino{
    //peso = 5// Definicion de atributo sin constructor

    // Este metodo siempre se ejecuta cuando instanciamos nuestro objeto
    constructor(especie, color){
        // this se refiere a la instancia
        this.peso = 5 // Atributo por defecto
        this.especie = especie
        this.color = color

        console.log(this.miVar)
    }

    correr(){
        // this.miVar = 5;
        console.log(this.especie + " empezó a correr");
    }
}

let gato = new Felino("gato", "naranja");
let tigre = new Felino("tigre", "naranja");

console.log(gato)
console.log(tigre)
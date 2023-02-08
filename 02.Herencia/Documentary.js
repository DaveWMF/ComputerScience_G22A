import { Film } from "./Film.js";

class Documentary extends Film{
    constructor(title, duration, year, language, producer, director, rating, researchers){
        super(title, duration, year, language, producer, director, rating)
        this.researchers = researchers
    }

    obtainInfo(){
        return `
        <section>
            <p>Reproduciendo ${this.Title}</p>
            <p>Duración: ${this.duration} mins</p>
            <p>Año de salida: ${this.year}</p>
            <p>Idioma: ${this.language}</p>
            <p>Productor: ${this.producer}</p>
            <p>Director: ${this.director}</p>
            <p>Clasificación: ${this.rating}</p>
            <p>Investigadores: ${this.researchers}</p>
        </section>
        `
    }
}

export { Documentary }
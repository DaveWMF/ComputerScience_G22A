import { Film } from "./Film.js";

class Movie extends Film{
    constructor(title, duration, year, language, producer, director, rating, actors, basedOn){
        super(title, duration, year, language, producer, director, rating)
        this.actors = actors
        this.basedOn = basedOn
    }

    obtainInfo(){
        return `
        <section>
            <p>Reproduciendo ${this.Title}</p>
            <p>Duración: ${this.duration}</p>
            <p>Año de salida: ${this.year}</p>
            <p>Idioma: ${this.language}</p>
            <p>Productor: ${this.producer}</p>
            <p>Director: ${this.director}</p>
            <p>Clasificación: ${this.rating}</p>
            <p>Actores: ${this.actors}</p>
            <p>Basado en: ${this.basedOn}</p>
        </section>
        `
    }
}

export {Movie}
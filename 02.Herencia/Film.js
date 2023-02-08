class Film {
    #title

    constructor(title, duration, year, language, producer, director, rating){
        this.#title = title
        this.duration = duration
        this.year = year
        this.language = language
        this.producer = producer
        this.director = director
        this.rating = rating
    }

    // get helps us to create a function that behaves as a attribute
    get Title(){
        return this.#title
    }

    obtainInfo(){
        return `
        <section>
            <p>Reproduciendo ${this.#title}</p>
            <p>Duración: ${this.duration}</p>
            <p>Año de salida: ${this.year}</p>
            <p>Idioma: ${this.language}</p>
            <p>Productor: ${this.producer}</p>
            <p>Director: ${this.director}</p>
            <p>Clasificación: ${this.rating}</p>
        </section>
        `
    }
}

export {Film}
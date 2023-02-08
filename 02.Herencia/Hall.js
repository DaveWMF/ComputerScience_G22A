
import {Film} from "./Film.js"

class Hall{
    constructor(id, capacity, seats, film){
        this.id = id
        this.capacity = capacity
        this.seats = seats
        this.film = film
    }

    play(){
        return this.film.obtainInfo()
    }
}

// We expose the data, functions, etc. that we need elsewhere
export {Hall}
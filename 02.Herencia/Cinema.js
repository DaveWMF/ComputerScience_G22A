// What we need from other archives or files
import { Hall } from "./Hall.js"

class Cinema {
    constructor(name){
        this.name = name
        this.halls = []
    }

    playHall(hallId){
        console.log("Reproduciendo sala " + this.halls[hallId].id)
        return this.halls[hallId].play()
    }

    addHall(hall){
        this.halls.push(hall)
    }
}

// We expose the data, functions, etc. that we need elsewhere
export { Cinema }
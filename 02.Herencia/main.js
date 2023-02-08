// What we need from other archives or files
import { Cinema } from "./Cinema.js"
import { Hall } from "./Hall.js"
import { Film } from "./Film.js"
import { Movie } from "./Movie.js"
import { Documentary } from "./Documentary.js"


let cine = new Cinema("Cinemex Polanco")

let film1 = new Film("Titanic", 180, 1997, "Inglés", "MGM", "James Cameron", "B15")

let movie1 = new Movie("Titanic", 180, 1997, "Inglés", "MGM", "James Cameron", "B15", 
    ["Dicaprio", ""], "Historia de Rose")

let documentary1 = new Documentary("Programadores en la sabana", 90, 2023, "Español", "Dev.F", "Generación 22-A", "B15", 
["Yunuen Sarasuadi", "Lazaro Hernandez", "Diego Rangel", "Allan Yaser"])

let hall1 = new Hall("S01", 50, [30,31,31,40], film1)
let hall2 = new Hall("S02", 100, [30,31,31,40], movie1)
let hall3 = new Hall("S03", 100, [1,2,3,4,5,6,7,8,9,10], documentary1)

cine.addHall(hall1)
cine.addHall(hall2)
cine.addHall(hall3)

console.log(cine.name)

document.body.innerHTML += cine.playHall(0)
document.body.innerHTML += "<hr>"
document.body.innerHTML += cine.playHall(1)
document.body.innerHTML += "<hr>"
document.body.innerHTML += cine.playHall(2)

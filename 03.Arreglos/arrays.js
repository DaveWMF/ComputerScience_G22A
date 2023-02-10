//*COCINANDO ARREGLOS 

//* ESTA FORMA TAMBIÉN ES VALIDA YA QUE UN ARRAY O ARREGLO "ES UN OBJETO"
 
    var myArray = new Array () //ESTA VACIO
    var myArray = new Array ("JOSE","PEPE","JAIR","MARCO","DAVID")
    console.log(myArray.length)
    // PARA VER NUESTRO ARREGLO EN UNA TABLA
    console.table(myArray)


    //* ESTA ES LA FORMA MAS COMUN Y LAS MAS USADA PARA INICIAR UN ARREGLO Y LA QUE 
    //* ESTARAN USANDO CONSTANTEMENTE

    var myArrayDos = [] // arreglo vacío, que vamos a poblar con datos/elementos
    var myArrayDos = ["LAZARO","JOSE","PEPE","MADERO","ANDRES","LUISA"]
    // console.log(myArrayDos.length)
    // console.log(myArrayDos)
    // console.table(myArrayDos)

    //* PODEMOS RECORRER UN ARREGLO PARA SABER SU TAMAÑO 

        myArrayDos.forEach(function(myArrayDos){
                console.log(myArrayDos)
        })

        //*forEach es un bloque constructivo de los lenguajes de programación
        //*recorrer los elemenos de una colección (arreglo)

        //* EJEMPLO 1) SUPONGAMOS QUE TENEMOS 2 ARREGLOS YA EXISTENTES Y DESEAMOS CREAR UN NUEVO ARREGLO

        const discoUno = ["Green Day", "Blink-182", "LINKIN PARK"]
        const discoDos = ["Guns and Roses", "Bon Jovi", "The Ramones"]
        const nuevoDisco = discoUno.concat(discoDos)
        console.log(nuevoDisco)
        console.table(nuevoDisco)
        
       //* EJEMPLO 2) TENEMOS UN ARREGLO PARA ESTUDIANTES 
       var estudiantes = ["Andres","David","Maya","Lujan","Oscar","Roberto"]
       var junto = estudiantes.join(",")
        console.log(junto)
       // join convierte una lista en una cadena, formada por los elemenos de una lista
       // separado por comas 

       //* EJEMPLO 3) VAMOS A UTILIZAR EL MISMO ARREGLO DE ESTUDIANTES, PARA PROBAR EL METODO POP

        var ultimo = estudiantes.pop()
        console.log(estudiantes)
        // PUSH
        estudiantes.push("Roberto")
        console.table(estudiantes)
        

        //* EJEMPLO 4 SEGUIREMOS USANRO EL ARREGLO DE ESTUDIANTES
        //* SPLICE (INDICE, NUMERO DE ELEMENOS A BORRAR, "ELEMENTO NUEVO")
        //* EN CASO DE SOLO BORRAR, " SOLO METER 2 PARAMETROS (INDICE, NUMERO DE ELEMENOS A BORAR)"
            estudiantes.splice(2,2)
            console.log(estudiantes)

            //* PASA QUE AVECES INDICAMOS QUE NO BORRE NINGUN ELEMENTO, PERO SUELE BORRAR EL ELEMENTO

            estudiantes.splice(2,0, "MARIA","MARCO","SERGIO","JUANPA",["MANZANA","PERA"],2,10,3,8) //INSERTAR ELEMENOS EN EL INDICE 2
            // console.log(estudiantes)

            //* METODOS SHIFT & UNSHIFT (IGUAL QUE POP Y PUSH PERO, CON EL PRIMER ELEMENTO DE LA LISTA)
                estudiantes.unshift("Paloma")
                console.log(estudiantes)
                var primerElemento = estudiantes.shift()
                console.log(primerElemento)
                console.table(estudiantes)

            //* REPLACE a -> e a -> b
            var ejemploReplace = "cocodrilo"
            var remplazo = ejemploReplace.replace("c","N")
            console.log(remplazo) 
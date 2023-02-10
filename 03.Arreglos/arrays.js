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
    console.log(myArrayDos.length)
    console.log(myArrayDos)
    console.table(myArrayDos)
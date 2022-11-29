let numero_estudiantes = Number(prompt("Ingrese el numero de estudiantes de la cursada"))
let opcion = 0
let curso = 0

do {
    for ( let i=0 ; i < numero_estudiantes; i++){
        let estudiantes = prompt("Ingresar nombre completo del Estudiante")
        alert("Bienvenido a CoderHouse" + " " + estudiantes + " ¿En que area te queres especializar?: ")
    
    let opcion = Number(prompt(" 1. Seleccione el curso\n ingrese 0 para salir"))
    
    if ( opcion == 1){
        do{
            let curso = prompt("1.Full stack  \n 2.UX UI \n 4.Blender \n 5.Photoshop \n 6.Premiere \n Ingrese 0 para salir")
            if(curso == 1){
                alert("Bienvenido al curso" + estudiantes + " de CoderHouse " + curso)
            }else if (curso == 2){
                alert("Bienvenido al curso" + estudiantes + " de CoderHouse " + curso)
            }else if (curso == 3){
                alert("Bienvenido al curso" + estudiantes + " de CoderHouse " + curso)
            }
            else if (curso == 4){
                alert("Bienvenido al curso" + estudiantes + " de CoderHouse " + curso)
            }else if (curso == 5){
                alert("Bienvenido al curso" + estudiantes + " de CoderHouse " + curso)
            }else if (curso == 6){
                alert("Bienvenido al curso" + estudiantes + " de CoderHouse " + curso)
            }
            curso = prompt ("1.Full stack  \n 2.UX UI \n 4.Blender \n 5.Photoshop \n 6.Premiere \n Ingrese 0 para salir")
            } while(parseInt(curso !=0))
        } else (
            alert("Espero que vuelvas pronto :) ")
        )
        opcion = Number(prompt(" 1. Seleccione el curso\n ingrese 0 para salir"))
    }

    }while(parseInt(curso !=0))   

function enviarDatos(){
    //variables
    let nombre=document.getElementsByName("nombre")[0].value;
    let apellido=document.getElementsByName("apellido")[0].value;
    let correo=document.getElementsByName("correo")[0].value;
    let contraseña=document.getElementsByName("contraseña")[0].value;
    console.log("El nombre ingresado fue: "+ nombre)
    console.log("El apellido ingresado fue: "+ apellido)
    console.log("El correo ingresado fue: "+ correo)
    console.log("La contraseña ingresada fue: "+ contraseña)
    //document contiene variadas funciones de JS para el DOM
}
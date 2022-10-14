function EnviarDatos(){
    //Datos que ingresará el USUARIO
    var nombre=document.getElementsByName("nombre")[0].value;
    var apellido=document.getElementsByName("apellido")[0].value;
    var email=document.getElementsByName("email")[0].value;
    var contraseña=document.getElementsByName("contraseña")[0].value;
    
    //Datos que entregará la MACHINE

    var nom=document.getElementById("r_nombre");
    var apell=document.getElementById("r_apellido");
    var mail=document.getElementById("r_email");
    var contra=document.getElementById("r_contraseña");

    //Datos para validar

    //VALIDACIONES

    if(!/^[a-zA-ZáéíóúÁÉÍÓÚ]*$/.test(nombre) || nombre==="" || nombre.length>20 || nombre.length<3){
        nom.innerHTML= " Datos de Nombre INVALIDO";
    }else{
        nom.innerHTML= " Dato VALIDADO";
    }
    if(!/^[a-zA-ZáéíóúÁÉÍÓÚ]*$/.test(apellido) || apellido==="" || apellido.length>25 || apellido.length<3){
        apell.innerHTML= " Datos de Apellido INVALIDO";
    }else{
        apell.innerHTML= " Dato VALIDADO";
    }
    if(!/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email) || email==="" || email.length>35){
        mail.innerHTML= " Datos de Email INVALIDO";
    }else{
        mail.innerHTML= " Dato VALIDADO";
    }
    if(!/^[a-zA-ZáéíóúÁÉÍÓÚ0-9]*$/.test(contraseña) || contraseña==="" || contraseña.length>16 || contraseña.length<8){
        contra.innerHTML= " Datos de Contraseña INVALIDO";
    }else{
        contra.innerHTML= " Dato VALIDADO";
    }

    if(nombre && apellido && email && contraseña === true){

    }else{
        ("Te registraste con Exito.");
    }
}
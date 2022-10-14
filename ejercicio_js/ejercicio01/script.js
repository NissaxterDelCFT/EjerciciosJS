function EnviarDatos(){
    var n1=document.getElementsByName("nota1")[0].value;
    var n2=document.getElementsByName("nota2")[0].value;
    var n3=document.getElementsByName("nota3")[0].value;
    var n4=document.getElementsByName("nota4")[0].value;
    var n5=document.getElementsByName("nota5")[0].value;

    var validacion1=document.getElementById("validacion_nota1");
    var validacion2=document.getElementById("validacion_nota2");
    var validacion3=document.getElementById("validacion_nota3");
    var validacion4=document.getElementById("validacion_nota4");
    var validacion5=document.getElementById("validacion_nota5");

    var nota_final=document.getElementById("promedio");
    //Calculo

    var promedio=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4)+parseFloat(n5))/5;

    //Validaciones

    if (/^[]*$/.test(n1) || 7.0<n1 || 0>n1 || isNaN (n1)){
        validacion1.innerHTML= "NOTA 1. INVALIDO";
    }else if (/^[]*$/.test(n2) || 7.0<n2 || 0>n2 || isNaN (n2)){
        validacion2.innerHTML= "NOTA 2. INVALIDO";
    }else if (/^[]*$/.test(n3) || 7.0<n3 || 0>n3 || isNaN (n3)){
        validacion3.innerHTML= "NOTA 3. INVALIDO";
    }else if (/^[]*$/.test(n4) || 7.0<n4 || 0>n4 || isNaN (n4)){
        validacion4.innerHTML= "NOTA 4. INVALIDO";
    }else if (/^[]*$/.test(n5) || 7.0<n5 || 0>n5 || isNaN (n5)){
        return validacion5.innerHTML= "NOTA 5. INVALIDO";
    }if (promedio>=4.0){
        nota_final.innerHTML= "Hola";
    }
}
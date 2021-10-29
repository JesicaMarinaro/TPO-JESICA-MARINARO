var NombreyApellido = document.getElementById("validationDefault01");
var email = document.getElementById("validationDefault02");
var reingreseemail = document.getElementById("validationDefault03");
var password = document.getElementById("validationDefault04");
var error = document.getElementById("error")



function enviarFormulario() {
    console.log("Enviando formulario...");

    var mensajesError =[];

    if(NombreyApellido.value === null || NombreyApellido.value === ""){
        mensajesError.push("Ingresa tu Nombre y Apellido");
    }
    
    if(email.value === null || email.value === ""){
        mensajesError.push("Ingresa tu email");
    }

    if(reingreseemail.value === null || reingreseemail.value === ""){
        mensajesError.push("Reingresa tu email");
    }

    if(password.value === null || password.value === ""){
        mensajesError.push("Ingresa tu password");
    }

    error.innerHTMLmensajesError.join(", ");



    return false;
}
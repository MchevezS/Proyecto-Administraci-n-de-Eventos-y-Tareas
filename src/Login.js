let emailL = document.getElementById("emailL")
let password = document.getElementById("password")
let btnInicio = document.getElementById("btnInicio")


// voy a comenzar a traer los datos del LocalStorage
function traerDatos() {
    let contrasena=password.value
    let lemail=emailL.value
    let emailLocal=localStorage.getItem("email",emailL)
    let passwordLocal=localStorage.getItem("password",password)
    console.log(emailLocal+" local storage email");
    console.log(passwordLocal+" local storage email");

    if (lemail===emailLocal&&contrasena===passwordLocal) {
        alert('Entramos exitosamente')
    }else{
        alert('incorrecto')
    }
}

// Valide espacios vacios
function validarVacios() {    
    let emailL = document.getElementById("emailL").value 
    let password = document.getElementById("password").value
    // estas dos vaariables las agregue porque no me dejaba validar solo con el .trim    
    let emailValor = emailL    
    let passwordValor = password

    if (emailValor.trim()===""||emailValor===null|| passwordValor.trim()===""||passwordValor===null) {
        alert('llenar espacios vacios') // cambiar alerta swwetalert
        console.log("if datos");
    }else{
        traerDatos()
        console.log('traerDatos()');
    }  
}

// evento click al btnInicio
btnInicio.addEventListener("click", validarVacios
    
)







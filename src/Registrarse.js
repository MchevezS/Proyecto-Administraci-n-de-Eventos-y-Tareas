let btnRegistrarse = document.getElementById("btnRegistrarse")
let nombre = document.getElementById("nombre").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value

function validarVacios() {         // Estoy validando espacios vacios
    if (nombre.trim()===""|| email.trim()==="" || password.trim()==="") {
        alert('llenar espacios vacios') // cambiar alerta
    }else{
        guardarDatos()
    }
}
function guardarDatos() {   
    let nombre = document.getElementById("nombre").value // con el .value les estoy dando un valor
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
     // Aca estoy guardando los datos en el localStorage
    localStorage.setItem("nombre",nombre),
    localStorage.setItem("email", email),
    localStorage.setItem("password",password)   
    // para que los datos no se elimine del localStorage lo tengo que hacer con un arreglo
}
  // Aca estoy dandole un evento al boton
btnRegistrarse.addEventListener("click",
    validarVacios
)







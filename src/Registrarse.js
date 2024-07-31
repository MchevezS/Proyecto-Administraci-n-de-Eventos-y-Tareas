let btnRegistrarse = document.getElementById('btnRegistrarse')
let nombre = document.getElementById('nombre')
let email = document.getElementById('email')
let password = document.getElementById('password')

let infUsuarios= JSON.parse(localStorage.getItem('user')) || []
console.log(infUsuarios);
// Aca estoy guardando los datos en el localStorage
function guardarDatos() {
    console.log("entra");  
    let nombre = document.getElementById('nombre').value // con el .value les asigne un valor
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    // Aca Verificoo si el usuario ya está registrado
    for (let index = 0; index < infUsuarios.length; index++) {
        if(infUsuarios[index].email===email){
            alert("EXISTE")
            return
        }
    }
         let usuario = {            
             nombre: nombre,
             email: email,            // El nombre que tiene a la izquierda es como me aparece en el localStorage.
             password: password
         };
         // Guardar el nuevo usuario
         infUsuarios.push(usuario);
         localStorage.setItem('user', JSON.stringify(infUsuarios));
         alert("Usuario registrado con éxito.");
         return
     }

function validarVacios() {
      // Estoy validando si hay espacios vacios
    
    let nombreValor = nombre.value     // les cree estas variables porque no me estaba funcionando con el .trim 
    let passwordValor = password.value
    let emailValor = email.value

    if (nombreValor.trim()===""||nombreValor===null||passwordValor.trim()===""||passwordValor===null||emailValor.trim()===""||emailValor===null) {
        console.log('pasa por aca');
        alert('llenar espacios vacios') // Esta alerta me confirma que los espacios tan completos. // cambiar alerta
    }else{
        guardarDatos()     
        console.log("esta llegando");
    }
}
// Aca estoy dandole un evento al boton
btnRegistrarse.addEventListener("click", ()=>{
    guardarDatos()
    validarVacios() // Este validar lo que hace es esperar que se le de click al boton para ejecutarse
    window.location.href = "Login.html"  // Me redirecciona otra sitio 
}

)







let btnInicio = document.getElementById("btnInicio")

let emailL = document.getElementById("emailL")
let password = document.getElementById("password")
let datosLocal = JSON.parse(localStorage.getItem("user")) || []

// voy a comenzar a traer los datos del LocalStorage
let existe=false
function traerDatos() {
    let lemail=emailL.value 
    let contrasena=password.value
    if(lemail && contrasena){
   for (let index = 0; index < datosLocal.length; index++) {
       if (lemail===datosLocal[index].email && contrasena===datosLocal[index].password) {
            existe=true
            break;
       }
   }
   if(existe){
    alert('Entramos exitosamente')
            window.location.href = "CalendarioEventos.html"
   }else{
    alert("invalido")
   }
}
}

// Valide espacios vacios
function validarVacios() {    
    let emailL = document.getElementById("emailL").value 
    let password = document.getElementById("password").value
    // estas dos variables las agregue porque no me dejaba validar solo con el .trim    
    let emailValor = emailL    
    let passwordValor = password

    if (emailValor.trim()===""||emailValor===null|| passwordValor.trim()===""||passwordValor===null) {
        alert('Llenar espacios vacios') // cambiar alerta swwetalert
        console.log("if datos");
        
    }else{
        traerDatos()
        
    }  
}

// evento click al btnInicio
btnInicio.addEventListener("click",()=>{
    validarVacios()
   

}
)







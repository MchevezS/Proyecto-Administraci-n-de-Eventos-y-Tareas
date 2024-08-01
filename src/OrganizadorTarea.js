// Carga las tareas almacenadas en el localStorage al iniciar la aplicacion
document.addEventListener('DOMContentLoaded', function() {
  let tareasAlmacenadas = localStorage.getItem('tareas');
  if (tareasAlmacenadas) {
      JSON.parse(tareasAlmacenadas).forEach(tarea => agregarTarea(tarea.descripcion, tarea.fechaHora, false));
  }
});

//Aca capturamos el evento de envio del formulario para agregar una nueva tarea
document.getElementById('formularioTarea').addEventListener('submit', function(evento) {
  evento.preventDefault(); // Evitoo el envio del formulario si hay algun error
  let descripcion = document.getElementById('descripcion').value; // Obtenemos la descripción de la tarea
  if (descripcion) {
      agregarTarea(descripcion); // Agregamos la tarea si la descripcion no está vacia
      document.getElementById('descripcion').value = ''; // Cda vez que la persona termine de agregar la tarea Limpiamos el campo de entrada
  }
});

// Funcion para agregar una tarea a la lista y al localStorage
function agregarTarea(descripcion, fechaHora = new Date().toLocaleString(), guardar = true) {
    let tareaElemento = document.createElement('li'); // Cree un elemento de lista (li) para la tarea
    let spanDescripcion = document.createElement('span'); // Cree un span para la descripcion de la tarea
    spanDescripcion.textContent = descripcion; // Estableci el texto del span a la descripcion de la tarea
    
    let spanFechaHora = document.createElement('span'); // Cree un span para la fecha y hora de la tarea
    spanFechaHora.textContent = ` (Creado: ${fechaHora})`; // Establecer el texto del span a la fecha y hora de creacion
    
    // Cree un boton para editar la tarea, fecha y hora
    let botonEditar = document.createElement('button');
    botonEditar.textContent = 'Editar';
    botonEditar.addEventListener('click', function() {
        let nuevaDescripcion = prompt('Edita la descripción de la tarea:', descripcion);
        let nuevaFecha = prompt('Edita la Fecha y hora de la tarea:', fechaHora);
        if (nuevaDescripcion) {
            spanDescripcion.textContent = nuevaDescripcion; // Actualiza la descripcion en el DOM
            descripcion = nuevaDescripcion; // Actualiza la descripcion en la variable
            fechaHora = nuevaFecha
            spanFechaHora.textContent=nuevaFecha
            actualizarLocalStorage(); // Actualiza el localStorage
        }
    });
    
    // Cree un boton para eliminar la tarea
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function() {
        tareaElemento.remove(); // Elimina el elemento de la lista del DOM
        actualizarLocalStorage(); // Actualiza el localStorage
    });
    
    // Añade los elementos al elemento de la tarea
    tareaElemento.appendChild(spanDescripcion);
    tareaElemento.appendChild(spanFechaHora);
    tareaElemento.appendChild(botonEditar);
    tareaElemento.appendChild(botonEliminar);
    
    // Añadi el elemento de la tarea a la lista de tareas en el DOM
    document.getElementById('listaTareas').appendChild(tareaElemento);
    
    // Guarde  la tarea en el localStorage si se indica
    if (guardar) {
        actualizarLocalStorage();
    }
}

// Funcion para actualizar el localStorage con las tareas actuales
function actualizarLocalStorage() {
    let tareas = []; // Cree un array para almacenar las tareas
    document.querySelectorAll('#listaTareas li').forEach(tareaElemento => {
        let descripcion = tareaElemento.querySelector('span').textContent; // Obtiene la descripción de la tarea
        let fechaHora = tareaElemento.querySelector('span:nth-child(2)').textContent.replace(' (Creado: ', '').replace(')', ''); // Obtiene la fecha y hora de la tarea
        tareas.push({ descripcion, fechaHora }); // Añade la tarea al array
    });
    localStorage.setItem('tareas', JSON.stringify(tareas)); // Guarda las tareas en el localStorage
  }  





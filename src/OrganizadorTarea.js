// Funcion para agregar una tarea a la lista y al localStorage
function agregarTarea(descripcion, fechaHora = new Date().toLocaleString(), guardar = true) {
  let tareaElemento = document.createElement('li'); // Cree un elemento de lista (li) para la tarea
  let spanDescripcion = document.createElement('span'); // Cree un span para la descripcion de la tarea
  spanDescripcion.textContent = descripcion; // Establecer el texto del span a la descripcion de la tarea

  let spanFechaHora = document.createElement('span'); // Cree un span para la fecha y hora de la tarea
  spanFechaHora.textContent = ` (Creado: ${fechaHora})`; // Establecer el texto del span a la fecha y hora de creacion

  // Cree un boton para editar la tarea
  let botonEditar = document.createElement('button');
  botonEditar.textContent = 'Editar';
  botonEditar.addEventListener('click', function() {
      let nuevaDescripcion = prompt('Edita la descripción de la tarea:', descripcion);
      if (nuevaDescripcion) {
          spanDescripcion.textContent = nuevaDescripcion; // Actualiza la descripcion en el DOM
          descripcion = nuevaDescripcion; // Actualiza la descripcion en la variable
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





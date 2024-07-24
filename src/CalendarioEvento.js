document.addEventListener('DOMContentLoaded', function () {
    const calendario = document.getElementById('calendario'); // Obtiene el contenedor del calendario
    const eventDateInput = document.getElementById('event-date'); // Obtiene el campo de entrada para la fecha del evento
    const eventNameInput = document.getElementById('event-name'); // Obtiene el campo de entrada para el nombre del evento
    const addEventButton = document.getElementById('add-event'); // Obtiene el botón para agregar o modificar eventos
    
    const infoEvent = JSON.parse(localStorage.getItem("eventos")) || []
    function datosEvento() {
     const eventDateInput = document.getElementById('event-date')   /// por terminar guardar los eventos en el local
     const eventNameInput = ocument.getElementById('event-name')     
    }

    // Crea una estructura de calendario con días del 1 al 31
    for (let day = 1; day <= 31; day++) {
        const dayElement = document.createElement('div'); // Crea un nuevo elemento div para cada día
        dayElement.className ='day'; // Asigne la clase 'day' al elemento
        dayElement.id =` day- ${day}`; // Asigne un ID único basado en el número del día
        dayElement.textContent = day; // Estableci el texto del div como el número del día
        calendario.appendChild(dayElement); // Agregue el div del día al contenedor del calendario
        
    }

    // Función para agregar o modificar eventos // *button
    addEventButton.addEventListener('click', function () {
        const date = new Date(eventDateInput.value); // Convierti la fecha ingresada a un objeto Date
        const eventName = eventNameInput.value; // Obtiene el nombre del evento ingresado
        const day = date.getDate(); // Obtiene el día del mes de la fecha ingresada
        
        if (day && eventName) { // Verifica que tanto el día como el nombre del evento sean válidos
            const dayElement = document.getElementById(` day- ${day}`); // Obtiene el elemento del día correspondiente
            let eventElement = dayElement.querySelector('.event'); // Busca si ya existe un evento en ese día
        
            if (!eventElement) { // Si no existe un evento, crea uno nuevo
                eventElement = document.createElement('div'); // Crea un nuevo elemento div para el evento
                eventElement.className = 'event'; // Asigne la clase 'event' al nuevo div
                dayElement.appendChild(eventElement); // Agrega el div del evento al div del día
            }

            eventElement.textContent = eventName; // Establece el texto del div del evento con el nombre del evento

            // Agregue funcionalidad para eliminar el evento
            eventElement.addEventListener('click', function () {
                dayElement.removeChild(eventElement); // Elimina el div del evento cuando se hace clic en él
            });

            // Limpia los campos del formulario
            eventDateInput.value = ''; // Limpia el campo de entrada de fecha
            eventNameInput.value = ''; // Limpia el campo de entrada de nombre de evento
        } else {
            alert('Por favor, ingrese una fecha y un nombre de evento válidos.'); // Muestra una alerta si faltan datos
        }

       
    });
});
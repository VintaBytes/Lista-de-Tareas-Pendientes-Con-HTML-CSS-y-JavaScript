//---------------------------------------------------------
// Mostrar las tareas en la página
//---------------------------------------------------------
function mostrarTareas() {
    // Obtener las tareas almacenadas en localStorage o un
    // arreglo vacío si no hay datos
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    const tareasPendientesUl = document.getElementById('tareasPendientes');
    const tareasCompletadasUl = document.getElementById('tareasCompletadas');

    // Limpiar el contenido de las listas de tareas en el DOM
    tareasPendientesUl.innerHTML = '';
    tareasCompletadasUl.innerHTML = '';

    // Iterar a través de las tareas y crear elementos para 
    // mostrarlas en la página
    tareasGuardadas.forEach((tarea, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.completada;

        // Configurar el evento onchange del checkbox según 
        // su estado. 
        checkbox.onchange = () => completarTarea(index,!tarea.completada );

        const label = document.createElement('label');
        label.textContent = tarea.tarea;

        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = () => eliminarTarea(index);

        // Agregar elementos al elemento de lista (li)
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(eliminarBtn);

        // Agregar el elemento de lista a la lista correspondiente
        // (pendientes o completadas) en el DOM
        if (tarea.completada) {
            tareasCompletadasUl.appendChild(li);
        } else {
            tareasPendientesUl.appendChild(li);
        }
    });
}


//---------------------------------------------------------
// Agregar una nueva tarea
//---------------------------------------------------------
function agregarTarea() {
    const nuevaTareaInput = document.getElementById('nuevaTarea');
    const nuevaTarea = nuevaTareaInput.value.trim();

    if (nuevaTarea !== '') {
        // Obtener las tareas actuales de localStorage o un 
        // arreglo vacío si no hay datos
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
        const nuevaTareaObj = { tarea: nuevaTarea, completada: false };

        // Agregar la nueva tarea al arreglo de tareas
        tareasGuardadas.push(nuevaTareaObj);

        // Guardar las tareas actualizadas en localStorage
        localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));

        // Limpiar el campo de entrada y actualizar la visualización
        // de tareas en el DOM
        nuevaTareaInput.value = '';
        mostrarTareas();
    }
}


//---------------------------------------------------------
// Marcar una tarea como completada en localStorage
//---------------------------------------------------------
function completarTarea(index, estado) {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
    tareasGuardadas[index].completada = estado;

    // Actualizar las tareas completadas en localStorage
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));

    // Actualizar la visualización de tareas en el DOM
    mostrarTareas();
}


//---------------------------------------------------------
// Eliminar una tarea en localStorage
//---------------------------------------------------------
function eliminarTarea(index) {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
    tareasGuardadas.splice(index, 1);

    // Actualizar las tareas en localStorage
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));

    // Actualizar la visualización de tareas en el DOM
    mostrarTareas();
}


//---------------------------------------------------------
// Mostrar las tareas almacenadas en localStorage al 
// cargar la página
//---------------------------------------------------------
mostrarTareas();





















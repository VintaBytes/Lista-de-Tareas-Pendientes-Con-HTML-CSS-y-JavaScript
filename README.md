# Desarrollo Web: Implementación de una Lista de Tareas Pendientes con HTML, CSS y JavaScript

<span><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/></span>
<span><img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/></span>

En este proyecto creaamos una lista de tareas pendientes utilizando HTML, CSS y JavaScript. Se involucran conceptos como manipulación del DOM, eventos, el objeto localStorage, etcétera. 

También he preparado un video, en el que te guiaré a través de los pasos necesarios para qué puedas crear tu propia "ToDo List":  

<a href="https://www.youtube.com/watch?v=NJChTgtjyiU"> Implementación de una Lista de Tareas Pendientes con HTML, CSS y JavaScript</a>

<img src="https://github.com/VintaBytes/Lista-de-Tareas-Pendientes-Con-HTML-CSS-y-JavaScript/blob/main/portada.jpeg?raw=true" width="320px">

## Screenshot:
<img src="https://github.com/VintaBytes/Lista-de-Tareas-Pendientes-Con-HTML-CSS-y-JavaScript/blob/main/screenshot.png?raw=true" width="320px">

---
## Explicación del Funcionamiento

1. **HTML (`index.html`)**: Define la estructura de la página con un campo de entrada para nuevas tareas, un botón para agregar tareas y dos listas para tareas pendientes y completadas.
   
2. **CSS (`estilos.css`)**: Define el estilo de la página, incluyendo el diseño para los elementos de la lista de tareas y los botones.
   
3. **JavaScript (`script.js`)**: Controla la lógica de la aplicación:
   - `mostrarTareas()`: Muestra las tareas almacenadas en `localStorage`.
   - `agregarTarea()`: Agrega una nueva tarea y la guarda en `localStorage`.
   - `completarTarea(index, estado)`: Marca una tarea como completada o pendiente en `localStorage`.
   - `eliminarTarea(index)`: Elimina una tarea de `localStorage`.
   - Al cargar la página, se llama a `mostrarTareas()` para mostrar las tareas guardadas.

/* DEFINIMOS LA RUTA DE DONDE CONSULTAREMOS LOS RECURSOS */
const API_URL = 'https://jsonplaceholder.typicode.com';
/* OBTENEMOS EL ELEMENTO DEL DOM HTML DONDE ARROJAREMOS LA INFO */
const HTMLResponse = document.getElementById('appposts');
/* CREAMOS EL ELEMENTO DONDE ARROJAREMOS LA INFO */
const ol = document.createElement('ol');

fetch(`${API_URL}/comments`)
    .then((response) => response.json())
    .then((comments) => {

        const limitedComments = comments.slice(0, 30);
        
        limitedComments.forEach((comment) => {
            let element = document.createElement('li');
            element.innerHTML = `${comment.email} comentó:<br>${comment.body}`;
            ol.appendChild(element);
        });
        HTMLResponse.appendChild(ol);
    })
    .catch((error) => {
        console.error('Error en la solicitud:', error);
    });
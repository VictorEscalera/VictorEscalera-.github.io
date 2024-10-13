
/* DEFINIMOS LA RUTA DE DONDE CONSULTAREMOS LOS RECURSOS */
const API_URL = 'https://jsonplaceholder.typicode.com';
/* OBTENEMOS EL ELEMENTO DEL DOM HTML DONDE ARROJAREMOS LA INFO */
const HTMLResponse = document.getElementById('apptable');
/* CREAMOS EL ELEMENTO DONDE ARROJAREMOS LA INFO */
const table = document.createElement('table');

const tbody = document.createElement('tbody');
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['Título', 'Mensaje']; 


headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);



fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const trBody = document.createElement('tr');

           
            const tdTitle = document.createElement('td');
            tdTitle.textContent = post.title; 
            trBody.appendChild(tdTitle);

            
            const tdBody = document.createElement('td');
            tdBody.textContent = post.body; 
            trBody.appendChild(tdBody);

            tbody.appendChild(trBody);
        });
        table.appendChild(tbody);
        HTMLResponse.appendChild(table);
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });

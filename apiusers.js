document.addEventListener('DOMContentLoaded', () => {
    const APIS_URL = 'https://jsonplaceholder.typicode.com/';
    const HTMLResponse = document.querySelector('#app');
    const ul = document.createElement('ul');

    fetch(`${APIS_URL}users`)  
        .then((response) => response.json())
        .then((users) => {
            users.forEach((user) => {
                let elem = document.createElement('li');
                elem.appendChild(
                    document.createTextNode(`${user.name}, ${user.phone}, ${user.email}`)
                );
                ul.appendChild(elem);
            });
            HTMLResponse.appendChild(ul);
        })
        .catch((error) => {
            console.error('error en la solicitud', error);
        });
});
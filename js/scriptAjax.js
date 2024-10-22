// INSERT
document.getElementById('btnInsertAjax').addEventListener('click', function(event) {
    event.preventDefault(); 

    // Obtiene los valores del formulario
    const names = document.getElementById('names').value;
    const artist = document.getElementById('artist').value;
    const stock = document.getElementById('stock').value;
    const launchDate = document.getElementById('launchDate').value;

    // Validar que los datos
    if (!names || !artist || !stock || !launchDate) {
        console.log('Por favor, completa todos los campos.');
        return; // Salir de la función si hay campos vacíos
    }

    // Esto crea parámetros
    const params = 'names=' + encodeURIComponent(names) + 
                   '&artist=' + encodeURIComponent(artist) + 
                   '&stock=' + encodeURIComponent(stock) + 
                   '&launchDate=' + encodeURIComponent(launchDate);

    // XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Solicitud POST
    xhr.open('POST', '/form2/php/insert.php', true);

    // Respuesta del servidor
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText); 
        } else {
            console.log('Error: ' + xhr.status); 
        }
    };

    // Esto envía la solicitud del formulario 
    xhr.send(params);
});

// UPDATE
document.getElementById('btnUpdateAjax').addEventListener('click', function(event) {
    event.preventDefault();

    // Obtiene los valores del formulario
    const idUpdate = document.getElementById('idUpdate').value;
    const names = document.getElementById('nameUpdate').value;
    const artist = document.getElementById('artistUpdate').value;
    const stock = document.getElementById('stockUpdate').value;
    const launchDate = document.getElementById('updateLaunchDate').value;

    // Crea parámetros
    const params = 'id=' + encodeURIComponent(idUpdate) + 
                   '&names=' + encodeURIComponent(names) + 
                   '&artist=' + encodeURIComponent(artist) + 
                   '&stock=' + encodeURIComponent(stock) + 
                   '&launchDate=' + encodeURIComponent(launchDate);

    // Valida que los datos
    if (!idUpdate || !names || !artist || !stock || !launchDate) {
        console.log('Por favor, completa todos los campos.');
        return; // Salir de la función si hay campos vacíos
    }

    // XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Solicitud POST
    xhr.open('POST', '/form2/php/update.php', true);

    // Respuesta del servidor
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText); 
        } else {
            console.log('Error: ' + xhr.status); 
        }
    };

    // Esto envía la solicitud del formulario 
    xhr.send(params);
});

// DELETE
document.getElementById('btnDeleteAjax').addEventListener('click', function(event) {
    event.preventDefault();

    const idDelete = document.getElementById('idDelete').value;

    const params = 'idDelete=' + encodeURIComponent(idDelete); 

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/form2/php/delete.php', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText); 
        } else {
            console.log('Error: ' + xhr.status); 
        }
    };

    // Esto envía la solicitud del formulario 
    xhr.send(params);
});

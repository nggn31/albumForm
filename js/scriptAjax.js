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
        return; 
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
        return; 
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

// GET TODOS LOS REGISTROS
document.addEventListener('DOMContentLoaded', function () {
    // Manejar el botón Get AJAX
    const btnGetAjax = document.getElementById('btnGetAjax');
    btnGetAjax.addEventListener('click', function () {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/form2/php/get.php', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                const resultTable = document.getElementById('resultTable');
                resultTable.innerHTML = ''; // Limpiar tabla antes de insertar nuevos datos

                data.forEach(album => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${album.id}</td>
                        <td>${album.names}</td>
                        <td>${album.artist}</td>
                        <td>${album.stock}</td>
                        <td>${album.launchDate}</td>
                    `;
                    resultTable.appendChild(row);
                });
            } else {
                console.log('Error: ' + xhr.status);
            }
        };

        xhr.send();
    });

    // Manejar el botón Get PHP
    const btnGetPhp = document.getElementById('btnGetPhp');
    btnGetPhp.addEventListener('click', function () {
        const formGet = document.getElementById('formGet');
        const formData = new FormData(formGet);
        
        fetch('/form2/php/get.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) // Asume que la respuesta es JSON
        .then(data => {
            const resultTable = document.getElementById('resultTable');
            resultTable.innerHTML = ''; // Limpiar tabla antes de insertar nuevos datos

            data.forEach(album => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${album.id}</td>
                    <td>${album.names}</td>
                    <td>${album.artist}</td>
                    <td>${album.stock}</td>
                    <td>${album.launchDate}</td>
                `;
                resultTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

  // Manejar el botón Clear Results
  const btnClear = document.getElementById('btnClear');
  btnClear.addEventListener('click', function () {
      const resultTable = document.getElementById('resultTable');
      resultTable.innerHTML = ''; // Limpiar la tabla de resultados
  });

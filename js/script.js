//REGISTER ALBUM WITH PHP/ FETCH
document.addEventListener('DOMContentLoaded', function () {
    const formInsert = document.getElementById('formInsert');
    if (formInsert) {
        formInsert.addEventListener('submit', function (event) {
            event.preventDefault();

            const formData = new FormData(formInsert);

            fetch('/form2/php/insert.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                alert('Álbum agregado con éxito');
                
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al agregar álbum');
            });
        });
    }
});


//UPDATE ALBUM WITH PHP/FETCH
document.addEventListener('DOMContentLoaded', function () {
    const buttonUpdate = document.getElementById('buttonUpdatePhp');
    if (buttonUpdate) {
        buttonUpdate.addEventListener('click', function (event) {
            event.preventDefault();

            const formUpdate = document.getElementById('formUpdate');
            const formData = new FormData(formUpdate);

            fetch('/form2/php/update.php', { 
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                alert('Álbum updated successfully');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error updating album');
            });
        });
    }
});

//DELETE ALBUM WITH PHP / FETCH
document.addEventListener('DOMContentLoaded', function () {
    const buttonDelete = document.getElementById('buttonDeletePhp');
    if (buttonDelete) {
        buttonDelete.addEventListener('click', function (event) {
            event.preventDefault();

            const formUpdate = document.getElementById('formDelete');
            const formData = new FormData(formUpdate);

            fetch('/form2/php/delete.php', { 
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                alert('Album deleted successfully');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error deleting album');
            });
        });
    }
});

//GET
document.addEventListener('DOMContentLoaded', function () {
    const buttonGetPhp = document.getElementById('btnGetPhp');
    
    if (buttonGetPhp) {
        buttonGetPhp.addEventListener('click', function (event) {
            event.preventDefault();
            
            // Realiza la solicitud fetch a get.php
            fetch('/form2/php/get.php')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    const resultTable = document.getElementById('resultTable');
                    resultTable.innerHTML = ''; // Limpiar la tabla

                    // Iterar sobre los datos y agregarlos a la tabla
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
                    console.error('Error fetching data:', error);
                    alert('Error fetching data');
                });
        });
    }
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

 


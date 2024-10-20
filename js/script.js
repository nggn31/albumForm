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

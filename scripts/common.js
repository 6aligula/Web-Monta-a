// comun.js
function cargarHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });
}

function cargarFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
}

// Exportar funciones para que puedan ser usadas en otros archivos si es necesario
export { cargarHeader, cargarFooter };

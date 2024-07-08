const listados = [
    { id: 1, descripcion: 'Hacer cama', completado: true },
    { id: 2, descripcion: 'Preparar almuerzo', completado: true },
    { id: 3, descripcion: 'Buscar niños al colegio', completado: true }
];
let ID = 4;  // 4 porque ya tenemos 3 elementos previos

document.addEventListener('DOMContentLoaded', function() {
    renderizarDatos();
    actualizarContador();
});

const agregarElemento = function(posicion) {
    const nuevoValor = document.querySelector('#valor').value;
    const nuevoElemento = { id: ID, descripcion: nuevoValor, completado: false };

    if (posicion === 'inicio') {
        listados.unshift(nuevoElemento);
    } else if(posicion === 'final') {
        listados.push(nuevoElemento);
    }
    ID++;

    renderizarDatos();
    actualizarContador();
};

const eliminarElemento = function(posicion){
    if (posicion === 'inicio') {
        listados.shift();
    } else if(posicion === 'final') {
        listados.pop();
    }

    renderizarDatos();
    actualizarContador();
};

const eliminarElementoPorID = function(id) {
    const posicion = listados.findIndex(elemento => elemento.id === id);

    if (posicion !== -1) {
        listados.splice(posicion, 1); 
    }
    
    renderizarDatos();
    actualizarContador();
}

const toggleCompletado = function(id) {
    const posicion = listados.findIndex(elemento => elemento.id === id);

    if (posicion !== -1) {
        listados[posicion].completado = !listados[posicion].completado;
    }
    
    renderizarDatos();
    actualizarContador();
}

const renderizarDatos = function() {
    const lista = document.querySelector('#listados');
    let html = '';
    for (const listado of listados) {
        html += `
        <div class="footer">
            <div class="chequea">
                <input type="checkbox" ${listado.completado ? 'checked' : ''} onclick="toggleCompletado(${listado.id})">
            </div>
            <button onclick="eliminarElementoPorID(${listado.id})">x</button>
            <div class="equis">ID: ${listado.id} - ${listado.descripcion}</div>
        </div>
        `;
    }
    lista.innerHTML = html;
};

const actualizarContador = function() {
    const contador = document.querySelector('#contador');
    const completadas = listados.filter(elemento => elemento.completado).length;
    contador.textContent = `Tareas completadas: ${completadas}`;
};

renderizarDatos();
actualizarContador();
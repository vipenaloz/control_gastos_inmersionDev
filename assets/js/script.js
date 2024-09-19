let ListaNombreGasto = [];
let ListaValorGasto = [];

function clickBoton(){

let nombreGasto = document.getElementById('nombreGasto').value;
let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);

    console.log(ListaNombreGasto);

    ListaNombreGasto.push(nombreGasto);
    ListaValorGasto.push(valorGasto);

    console.log(ListaNombreGasto);

    actualizarListaGastos();

    //alert('Click del usuario');
}

function actualizarListaGastos(){

    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmLista = ''; 
    let totalGastos = 0;

    ListaNombreGasto.forEach((elemento, posicion) => {

        const valorGasto = Number(ListaValorGasto[posicion]);

        htmLista += `<li> ${elemento}  -  USD = ${valorGasto.toFixed(2)} 
        
            <button onclick="eliminarGasto(${posicion});">Eliminar</button>
            </li>`;
       
        totalGastos += Number(valorGasto);
        //console.log(elemento);
        console.log(totalGastos);
        
    });

    listaElementos.innerHTML = htmLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    Limpiar();

 }

 function Limpiar(){

    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';

  }


function eliminarGasto(posicion){

    ListaNombreGasto.splice(posicion, 1);
    ListaValorGasto.splice(posicion, 1);
    actualizarListaGastos();

 }
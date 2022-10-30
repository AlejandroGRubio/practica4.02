"use strict";

var doc = window.document;



//Crea la tabla, segun su ancho y largo, añade un id a la tabla y a los td.
export function crearTabla(ancho, largo, id = ``, idAnyadir = ``){

    var tabla = doc.createElement('table');
    tabla.setAttribute(`id`, `tablas`);

    doc.getElementById(idAnyadir).appendChild(tabla);


    var tablaId = doc.getElementById(`tablas`);
    
    var cont = 1;

    for (let i = 0; i < ancho; i++) {
        
        var creaTr = doc.createElement(`tr`);



        for (let j = 0; j < largo; j++) {
            var creaTd = doc.createElement(`td`);
            creaTd.setAttribute(`id`, id);
            creaTd.innerHTML=`&nbsp;`;
            creaTr.appendChild(creaTd);

            cont++;
        }

        tablaId.appendChild(creaTr);

        
    }



}


//Muestra el color seleccionado donde le indiques.
export function colorSeleccionado(nomColor, idUbi) {
    

    var cont = doc.getElementById(idUbi);

    cont.innerText = ``;
    cont.innerText= `Seleccionado: ${nomColor}`;




}

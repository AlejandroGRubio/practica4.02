"use strict";

import * as cosas from "./biblioteca/addCosas.js";




window.onload = () => {


    var doc = window.document;

    var color = ``;

    var pintarActivado = false;


    //Creamos la tabla.
    cosas.crearTabla(50, 70, `huecos`, `tableroDiv`);

    //Hacemos que por cada apartado para seleccionar color cambie la variable color y añada un texto indicando el color seleccionado.
    doc.getElementsByClassName(`rojo`)[0].addEventListener(`click`, () => {


        color = `rojo`;
        cosas.colorSeleccionado(color, `info`);



    });

    doc.getElementsByClassName(`amarillo`)[0].addEventListener(`click`, () => {


        color = `amarillo`;
        cosas.colorSeleccionado(color, `info`);



    });

    doc.getElementsByClassName(`verde`)[0].addEventListener(`click`, () => {


        color = `verde`;
        cosas.colorSeleccionado(color, `info`);



    });


    doc.getElementsByClassName(`azul`)[0].addEventListener(`click`, () => {


        color = `azul`;
        cosas.colorSeleccionado(color, `info`);



    });

    doc.getElementsByClassName(`blanco`)[0].addEventListener(`click`, () => {


        color = `blanco`;
        cosas.colorSeleccionado(color, `info`);



    });
    
    //Añadimos un addEventListener para saber si has hecho click y saber si está activado el pintar o no.
    doc.getElementById(`tableroDiv`).addEventListener(`click`, () => {


        if (pintarActivado == false) {
            pintarActivado = true;
        }
        else{
            pintarActivado = false;
        }

    });


    //Si está activo el pintar que se cambie el class del elemento que se le pasa por encima, siempre que sea un td.
    doc.getElementById(`tableroDiv`).addEventListener(`mouseover`, 
    
    function (evento) {
        
    
            if (pintarActivado == true && evento.target.nodeName == `TD`) {
                
    
               evento.target.setAttribute(`class`, color);
    
    
    
    
            }
    
    
    
        }
    );













} //Fin del código onload.
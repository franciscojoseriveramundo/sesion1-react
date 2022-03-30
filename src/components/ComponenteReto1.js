import React from 'react'
import Componente2 from './ComponenteReto2';

//Componente tonto o componente de funcion
//Componentes y JSX

function ComponenteReto1(){
    return(
        <><div>
            <h1> Hola mundo desde un componente Hijo 2 - Padre Componente 1</h1>
        </div><Componente2 /></>
    );
}

export default ComponenteReto1
import React from 'react'
import Componente3 from './ComponenteReto3';

//Componente tonto o componente de funcion
//Componentes y JSX

function ComponenteReto2(){
    return(
        <><div>
            <h1> Hola mundo desde un componente Hijo 3 - Padre Componente 2</h1>
        </div><div>
                <Componente3 />
            </div></>
    );
}

export default ComponenteReto2
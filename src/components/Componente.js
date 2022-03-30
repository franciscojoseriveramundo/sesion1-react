import React from 'react'
import ComponenteReto1 from './ComponenteReto1';

//Componente tonto o componente de funcion
//Componentes y JSX

function Componente(){
    return(
        <><div>
            <h1> Hola mundo desde un componente Hijo 1 - Padre App js</h1>
        </div><div className="App">
                <ComponenteReto1 />
        </div></>
    );
}

export default Componente
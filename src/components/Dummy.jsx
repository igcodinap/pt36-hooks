import { useState, useEffect } from 'react'

// props !== propTypes
// props son lo valores que va a recibir un componente
// propTypes me permiten decirle al compilador el tipo de dato de un props


const dummy1 = (props) => {
    return props.color
}

const Dummy = (agua, notWorking) => {

    const aguaStructure = {
        color: 'azul',
        color2: 'yellow',
        numero: 10
    }

    console.log(notWorking, '<---notWorking')
    console.log(agua, '<---agua')
    // useState es una FUNCION!
    // PRIMER PARAMETRO color ==> variable
    // SEGUNDO PARAMETRO setColor ===> funcion que sirve para modificar
    // el primer parametro

    
    // useState(initialValue)  ----> es el valor inicial del PRIMER PARAM
    // el valor del primer parametro puede ser cualquier tipo de dato
    const [color, setColor] = useState('red')

    // cuando se monte el componentente y cuando se actualice
    let aux = false
    useEffect(() => {
        console.log(color)
    }, [color, aux])

    return (
        <h1>
            {agua.input}
        </h1>
    )
}

export default Dummy
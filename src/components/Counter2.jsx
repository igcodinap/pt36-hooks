import {useState, useEffect} from 'react'

export default function Counter() {

    const [counter, setCounter] = useState(0)

    // el useEffect ejectuta lo que tenga dentro de si al montar el componente y al actualizarlo
    // ejecutara solo al montar si y solo si tiene como segundo parametro unos corchetes []

    // sintaxis: funcion que recibe la funcion a ejecutar como primer paramentro, y opcinalmente como segundo parametro los corchetes
    useEffect(()=>{
        console.log('se actualizó el componente')
    }, [])

    const handleIncrement = () => {
        setCounter(counter + 1)
        console.log(counter, '<---counter')
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
        console.log(counter, '<---counter')

    }


    return(
        <div className="container">
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
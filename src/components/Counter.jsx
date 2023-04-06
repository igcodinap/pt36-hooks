import {useState} from 'react'


export default function Counter() {
    let notStateVariable = 0;
    // const
    // nombre de la variable de estado
    // nombre del metodo de actualizacion de la variable de estado
    // =
    // useState()
    // En el () del useState el valor inicial de la VdeE
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('First Name')

    const handleIncrement = () => {
        notStateVariable = notStateVariable + 1;
        // console.log(notStateVariable, '<---notStateVariable')

        // flujo del useState - flujo correcto
        setCounter(counter + 1)
        // console.log(counter, '<---counter')
    }

    const handleDecrement = () => {
        notStateVariable = notStateVariable - 1;
        // console.log(notStateVariable, '<---notStateVariable')

        // flujo del useState - flujo correcto
        
        setCounter(counter - 1)
        console.log(counter, '<---counter')

    }

    const handleRandom = () => {
        const random = Math.random()*10000000000000
        setCounter(random)
    }

    const handleReset = () => {
        setCounter(0)
    }

    return(
        <div className="container">
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleRandom}>Random</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
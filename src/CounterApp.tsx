import { useState } from "react"

interface Item {
    name: string,
    value: number
}

const CounterApp = ({name, value} : Item) => {

    // count es la variable de estado actual, que comienza con un valor de 0.
    // setCount es la función para actualizar el estado de count.
    const [counter, setCounter] = useState(value);

    // Al hacer clic en el botón, llamamos a setCount(count + 1) para incrementar el valor de count.
    const handleAdd = () => {
        //console.log(event)
        setCounter( counter + 1)
    }

    const handleRemove = () => {
       if (counter > 0) {
        setCounter (counter - 1)
       }
    }

    const handleReset = () => {
        setCounter(value)
    }

    return(
        <>
            <h1>Counter App</h1>
            <h3> Item: {name}</h3>
            <h3> Value: {counter}</h3>
            <button onClick={handleAdd}> Add </button> 
            <button onClick={handleRemove}> Remove </button> 
            <button onClick={handleReset}> Reset </button> 
        </>
    )
}

export default CounterApp;
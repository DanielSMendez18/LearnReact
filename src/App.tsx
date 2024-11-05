const autor = 'Daniel';

const suma = (a: number,b: number) => { return (a+b)}

export interface Book {
    edition: number
    title: string,
}

const App = ({title = 'valor default', edition}: Book) => {

    return (
        <>
            <h1>Hola Mundo xd</h1>
            <h3>Mi primer projecto react del {autor}</h3>
            {/* <h4>{newAuthor.year}</h4> */}
            <br />
            <h4>Probando el uso de funciones</h4>
            <h5>Suma de dos valores: {suma(34,67)}</h5>
            <br />
            <h4>Probando el uso de props</h4>
            <h5>{title}</h5>
            <h5>Edition: {edition}</h5>
        </>
    )
}

export default App
import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
// import First from "./FirstApp";
import './styles.scss'
import CounterApp from "./CounterApp";
import ProfileApp from "./ProfileApp";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* Ejercicios Introductorios */}
        <App title="Misión Rescate" edition={2}/>
        {/* <First /> */}
        {/* Ejercicios con useState */}
        <CounterApp name="libro" value={0}></CounterApp>
        <ProfileApp name="Globant" country="PER"></ProfileApp>
    </React.StrictMode>
);
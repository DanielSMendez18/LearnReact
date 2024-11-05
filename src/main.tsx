import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
// import First from "./FirstApp";
import './styles.scss'
import CounterApp from "./CounterApp";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App title="Misión Rescate" edition={2}/>
        {/* <First /> */}
        <CounterApp name="libro" value={0}></CounterApp>
    </React.StrictMode>
);
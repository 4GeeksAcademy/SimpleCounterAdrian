import React from "react";
import Botones from "./botones";
import Portada from "./portada";
import RelojIcon from "./reloj";


const Home = (props) => {

    const segundos = props.counter;
    let posicion1 = props.counter % 10;
    let posicion2 = Math.floor((props.counter / 10)%10);
    let posicion3 =Math.floor((props.counter / 100)%10);
    let posicion4 = Math.floor((props.counter / 1000)%10);
    let posicion5 = Math.floor((props.counter / 10000)%10);
    let posicion6 = Math.floor((props.counter / 100000)%10);

    return (
        <div>
            <Portada/>
            
            <div className="container">
            <RelojIcon/>
            <div className="cajaDelNumero">
                <span id="segundos" className="numero">{posicion6} </span>
            </div>

            <div className="cajaDelNumero">
                <span id="segundos" className="numero">{posicion5} </span>
            </div>

            <div className="cajaDelNumero">
                <span id="segundos" className="numero">{posicion4} </span>
            </div>

            <div className="cajaDelNumero">
                <span id="segundos" className="numero">{posicion3} </span>
            </div>

            <div className="cajaDelNumero">
                <span id="segundos" className="numero">{posicion2} </span>
            </div>

            <div className="cajaDelNumero">
                <span id="segundos" className="numero">{posicion1} </span>
            </div>

            </div>
                <Botones></Botones>
           </div>
    );
};

export default Home;
import { time } from "console";
import { useEffect, useState } from "react";

export function Cronometro() {

    const [tempo, setTempo] = useState(0);

    const segundos = tempo % 60;
    const minutos = Math.floor(tempo/60)

    useEffect(() => {
        setTimeout(() => {
            setTempo(tempo + 1);
        }, 1000)
    });

    const [minutoUm, minutoDois] = String(minutos).padStart(2, '0').split(' ');
    const [segundoUm, segundoDois] = String(segundos).padStart(2, '0').split(' ');


    return (
        <div>
            <div>
                <span>{minutoUm}</span>
                <span>{minutoDois}</span>
            </div>
            <span>:</span>
            <div>
                <span>{segundoUm}</span>
                <span>{segundoDois}</span>
            </div>
        </div>
    );
}
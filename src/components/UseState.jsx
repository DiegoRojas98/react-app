import React, {useState} from "react";

export default function UseState(){
    const [val, setVal] = useState(0);

    return <>
        <h3>Contrador: { val } </h3>
        <button onClick={() => setVal(val + 1) }>Agregar</button>
    </>
}
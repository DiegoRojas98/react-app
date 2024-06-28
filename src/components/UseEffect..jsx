import React, {useState, useEffect} from "react";

export default function Useeffect(){
    const [val, setVal] = useState();

    useEffect(() => console.log('Remderizado'));

    return <>
        <hr />
        <input type="text" onChange={ e => setVal(e.target.value)} />
        <button type="button" onClick={() => alert('Has excrito: ' + val)}>Alert</button>
    </>
}
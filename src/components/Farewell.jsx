export default function Farewell(props){
    console.log(props);
    return <>
        <p>Adios {props.name}. (hora: {props.hour})</p>
    </>
}

export function FarewellName({name}){
    return <>
        <p>Adios {name}.</p>
    </>
}
export default function Farewell(props){
    return <>
        <p>Adios {props.name}. (hora: {props.hour})</p>
    </>
}

export function FarewellName({name, hour = 12, minute}){
    return <>
        <p>Adios {name}. (time: {hour}:{minute})</p>
    </>
}

FarewellName.defaultProps = {
    minute: '25',
}


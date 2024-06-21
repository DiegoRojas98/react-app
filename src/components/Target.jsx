import '../css/Target.css'; 

export default function Target(){
    const pStyle = { textAlign: 'center' };
    return <div className='Target'>
            <h1 style={{ color: 'red'}}>Tarjeta</h1>
            <p style={pStyle }>Estilo en react</p>
        </div>
}
export default function Fetch() {
    return <button onClick={ () => {
        alert('Revisa la consola');
        fetch('https://autocom-production.up.railway.app/api/user')
        .then(response => {
             if(!response.ok) {
                throw new Error('Link caido por favor en /src/components/Fetch.jsx linea 4 cambia el link por https://jsonplaceholder.typicode.com/comments');
             } 
             return response.json()
        })
        .then(data => console.log(data))
        .catch( error => console.log(error))
    }}>
        Fetch
    </button>
}
# REACT JS (Docker)

Es un marco de desarrollo forntend el cual usa js, para el desarrollo web react manipula
el Dom, tener en cuenta que react es un marco multiplataforma es decir puede ser usado
para el frontend de diversos tipos de platafomar (web,android,ios,desktop)


## Sobre la creacion de este proyecto con docker
Para la creacion de este proyecto se creo primero el archivo `docker-compose.yml` con este ya tenemos un archivo
el cual se encargara de la creacion del contenedor con node, luego de esto usamos el comando 

```sh
docker-compose run --rm react-app npx create-react-app react-app --use-npm
```

`docker-compose run`: ejecuta el o los contenedor definidos en el archivo `docker-compose.yml` en este caso 
se requiere que se ejecute solo el contenedor `react-app` definido en el archivo `docker-compose.yml`, luego de
ejecutar el contenedor se ejecutara el comando `npx create-react-app react-app --use-npm` el cual es un comando 
comun para la creacion de los archivos nesesarios para las aplicaciones reacts, donde se hace uso de `npx` para
la descarga de paquetes, `create-react-app` la instruccion para la creacion y `react-app` es el nombre de nuestra
aplicacion, `-rm` indica al contenedor que elemine el contendor luego de que sus servicios finalzen, como este
es un contenedor temporal para la creaciond de los archivos requeridos para el proyecto lo usaremos.
Tener en cuent que esto creara los archivos en un nuevo directorio, por favor incluir el `docker-compose.yml`
dentro de dicho directorio.

Para finalizar para levantar el servicio solo hace falta el comando 

```sh
docker-compose up
```

## Sobre la ejecucion del proyecto al clonar (git clone)
Para la ejecucion del proyecto una vez descargado ejecute el comando 

```sh
docker-compose run --rm react-app npm install --use-npm
```

Esto instalara las dependecias del proyecto requeridas luego de esto ejecute el comando

```sh
docker-compose up
```


## Creacion del proyecto con node local
para crear una aplicacion node solo hace falta el comando

```sh
npx create-react-app name-app --use-npm
```

Esto creara un directorio con los archivos requeridos para la ejecucion de node, luego dirijase a el directorio
creado y luego para ejecutar el servidor de desarrollo  

```sh
npm start
```

## sobre la estructura de REACT
react contiene varios directorios y archivos entre los cuales estan
- `/node_modules`: contiene todas las dependncias 'librerias' que el proyecto requiere
- `/public`: este contiene los archivos que pueden ser accedidos por el usuario 
- `/public/index.html`: este archivo contiene lo basico de una pagina web en donde podremos ver la etiqueta 
div con id root, el cual es donde se renderizara la aplicacion
- `/src`: contiene la funcionalidad esencial para la ejecuion de la aplicacion, aqui iran los archivos de 
nuestr aplicacion
- `/build`: al finalizar un desarrollo y ejecutar el comando `npm run build` se creara esta carpeta, donde
iran la logina comprimida para su uso en produccion

## index.js
Este archivo es el punto de partida de la aplicacion desde este archivo crearemos la logica del frotend 

```sh
// Primero debemos importar react
import React from 'react';
// para la manipulacion del dom importamos el react-dom/client
import ReactDOM from 'react-dom/client';

// Buscamos el elemento donde se renderizara nuestra aplicacion, teniendo en cuenta
// que el archivo que se ejecuta primero es el index.html y este requiere el index.js
// generalmente este elemento es un div con id 'root' 
const root = ReactDOM.createRoot(document.getElementById('root'));

// renden es una funcion que renderiza lo que le especifiquemos
root.render(
    <h1>Hola Mundo</h1>
);
```

# Conceptos

## componentes 
Los componentes son elementos de codigo reutilizables los cuales se modifcan por medio de sus atributos ya que 
generalmente son encapsulados como funciones que retornan codigo html (elementos).

Se aconseja que los componentes se encuentren en el directorio  `/src/Components`, y que los nombres de los archivos
tengan el estilo camelcase `MyComponent`. asi mismo se aconseja que la funcion principal del componente se llame igual
que el archivo y que siga la misma estructura camelcase.

```sh
// con react podemos retornar elementos html en funciones
function Component(){
    return <h1>este es un componente</h1>
}

function Component2(){
  return <div>
    <h1>Componente multietiquetas</h1>
    <p>Componente con varias etiquetas</p>
  </div>
}

root.render(
    // teniendo en cuenta que solo debe existir un elemento padre y de este se deben desprender los sub-elementos
    // es decir para las funciones siempre debe existir un elemento que contenga el resto
    // crearemos un div dentro de la funcion render por si requerimos usar la funcion mas de una vez
    <div>
        // para hacer uso de codigo JS dentro de la funcion render usaremos las llaves {}
        { Component() }
        // otra forma de llamar componentes en react
        // Para hacer uso de esta llamada las funciones y etiquetas deben ir con la primer letra en mayuscula
        // con esto react lo reconoce como un componente y no como una etiqueta html
        <Component></Component>
        // una forma simplificada
        <Component/>

        <Component2/>
    </div>
)
```

## JSX
React hace uso de JSX la cual es una combinacion de Js con HTML. con lo cual podemos agregar logica a los componetes

```sh
function Greet(){
    const name = 'Diego'
    // Para interpretar codigo dentro de elemntos usaremos las llaves {}
    return <h1>hola { name }</h1>
}

function Access(){
    const access = true

    // aqui podemos observar como agregamos funcionalidad con js
    // if (access){
    //    return <h1>Acceso Consedido </1>
    // }else{
    //    return <h1>Acceso Denegado</h1>   
    // }

    // pero react establece que es mejor usar operadores ternarios siempre que sea posible
    return <h1>Acceso { access ? 'Consedido' : 'Denegado' } </h1>
}

function calculateTime(val){
  return val * 10
}

function ShowObject(){
  const user = {
    name : 'Gabo',
    age : '5',
    // tambien podemos hacer uso de funciones anidadas
    time : calculateTime(5)
  }
  // para mostrar objetos completos en un elemento podemos usar JSON.stringifi el cual convierte 
  // el objeto en una cadena facil de observar
  return <h2>{ JSON.stringify(user) }</h2>
}


root.render(
    // Fragment es el uso de eiquetas sin especificar, con esto simplificamos codigo y ayudamos a la lectura
    <>
        <Greet/>
        <Access/>
        <ShowObject/>
    </>
)
```

## EcmaScript o Importar/Exportar 
Para realizar la importacion de funcionalidad de archivos basta con declarar `export` en el archivo que contiene
la funcionalidad, codigo o componete y luego lo importamos en el index.js con `import`


```sh
// math.js
// Una forma de exportar funciones por separado en este casa en el import se debe argumentar que funciones
// especificas importar
export function add(val1,val2){
    return val1 + val2;
}

export function rest(val1,val2){
    return val1 - val2;
}
```

```sh
// math2.js
function mult(val1, val2){
    return val1 * val2;
}

// en este caso esta funcion se exportara automaticamente por tal motivo no sera neserario al momento de
// argumentar el nombre de esta funcion
export default mult;


// Si dentro del mismo archivo requerimos exportar otra funcion lo aremos con el metodo export
export function div(val,val2){
    return val / val2;
}
```

```sh
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// en este caso se deben argumentar que funciones del archivo queremos importar, estas separadas de una coma
import {add, rest} from './math';

// en el caso de export default la funcion o componete exportado por medio de default tomara el nombre que 
// se le de luego de la instruccion import, en este caso la funcion 'mult' del archivo mat2.js podra ser usada 
// con el nombre operation. Si se requiere llamar otra funcion de el archivo sera igualmente que lo anterior visto
import operation, { div } from from './math2';

root.render(
  <>
    { add(1,3)}  <br/>
    { rest(1,3)}  <br/>
    { opertaion(2,5)}  <br/>
    { div(9,3)} <br/>
  </>
);
```


## Extencion .jsx
Se da cuando queremos mejorar la lecttura de la estructura de codigo para otros desarrolladores
esta estencion es usada para dar a entender que el archivo contiene componetes y no solo es codigo JS
de igual manera react es capas de interpretar la extencion JS y la JSX de manera correcta y ambas obtienen
el mismo comportamiento al momento de jecutar el codigo


## PROPS
los props son las propiedades que se le da a un componente al momento de su llamado para el uso de las mismas
como propiedades de un objeto dentro de las funciones del componente.


```sh
// /components/Farewell.jsx

// podemos hacer uso del objeto completo y traer todas las propiedades generadas al momento de llamar el componente
export default function Farewell(props){
    return <>
        <p>Adios {props.name}. (hora: {props.hour})</p>
    </>
}

// Tambien podemos hacer uso de propiedades especificas (tambien llamdo estructuracion de objetos)
// y el uso de la definicon de un valor por defecto, la cual se puede realizar de dos maneras
// definiendola en los parametros de entrada de la funcion
export function FarewellName({name, hour = 12, minute}){
    return <>
        <p>Adios {name}. (time: {hour}:{minute})</p>
    </>
}

// con el metodo defaultProps
// Este metodo sera removido en futuras verciones de react por tal
// motivo se desaconseja su uso
FarewellName.defaultProps = {
    minute: '25'
}
```

```sh
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Farewell, {FarewellName} from './components/Farewell';

root.render(
  <>
    <Farewell name='diego' hour={7} />
    // para pasar arreglos, numeros, boleanos, objetos o funciones usamos las {}
    <Farewell 
      name='nicolas' 
      hour={19} 
      arr={[1,2,3]} 
      bool={true} 
      obj={ x: 'x', y: 'y'}
      func={ fn() => { console.log('farewell')}}
    />
    <FarewellName name='rojas'/>
  </>
);
```

## PropsType
Los propstype son utiles al momento de declarar que tipo de dato se usara en un componente, este es un paquete por 
lo tanto tendremos que descargarlo con el comando.
Si esta ejecutando el proyecto en docker debe ejecutarlo dentro del contenedor

```sh
npm install --save prop-types
```

```sh
// /components/Buttom.jsx
import PropTypes  from "prop-types";

export default function Buttom({text}){
    return <>
     <button>
        { text }
    </button>
    </>
}

// definicon de prototipos esperados y requerido 
Buttom.protoTypes = {
    text: PropTypes.string.isRequired
}
```

```sh
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Buttom from './components/Buttom';

root.render(
  <>
  // correcto
  <Buttom text={'ComponetB'} />
  // erroneos
  // <Buttom text={ {x: 'x'} } />
  // <Buttom  />
  </>
);
```


## Estilo en React
Los estilos seran aplicados en linea, similar a como lo realizariamos en html, y existen varias maneras

```sh
// /css/Target.css
.Target {
    background: #303030;
    color: #fff;
}
```

```sh
// /components/Target.jsx
import '../css/Target.css'; 

export default function Target(){
    const pStyle = { textAlign: 'center' };
    return <div className='Target'>
            <h1 style={{ color: 'red'}}>Tarjeta</h1>
            <p style={pStyle }>Estilo en react</p>
        </div>
}
```

```sh
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Target from './components/Target';

root.render(
  <>
    <Target />
  </>
);
```


## Componentes declarados clases
a lo largo de react han existido varias formas de declara un componente la principal es la de usar
funciones , otra tambien usada pero no tan conocida es definir el componente como una clase

```sh
// /components/ClassComponet.jsx
import { Component } from "react";

export default class ClassComponet extends Component {
    render() {
        return <h3>Componente declarado con clase</h3>
    }
}
```

```sh
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Target from './components/ClassComponet';

root.render(
  <>
    <ClassComponet />
  </>
);
```


## Event Handlers (manejo de eventos)
Los eventos en react pueden ser manejados por medio de los props especificos on y sirven segun el elemento a que se aplique 

```sh
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// una forma de crear variables realacionadas a funciones y eventos es nombrarlar handle 
// y le agregamos el evento especifico
const handleChange = e => console.log(e.target.value);
// en este caso usamo una funcion flecha que equivale a 
// const handleChange = function(event) { console.log(e.target.value) };

root.render(
  <input onChange={ e => console.log(e.target.value)} />
  <input onChange={ handleChange } />
);
```

## Fetch API 
Nos permite solicitar datos de servidores externos, el fetch es una de las diversar formas de hacerlo

```sh
// /components/Fetch.jsx
export default function Fetch() {
  // en este caso usamos un onckil de buttom para llamar los datos.
  return <button onClick={ () => {
      alert('Revisa la consola');
      fetch('https://autocom-production.up.railway.app/api/user')
      .then(response => {
            // validamos si la respuesta es correcta de lo contrario generamos un throw para 
            // indicar que algo esta mal
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
```

```sh
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Fetch from './components/Fetch';

root.render(
  <>
    <Fetch />
  </>
);
```

## Importacion de Modulos
Al react ser una biblioteca de codigo abierto podemos importar modulos de otros creadores
en este caso ejecutamos el comando siguiente comando, el cual instalara un modulo de iconos

```sh
npm install react-icons --save
```

```sh
// /components/ImportModuls-jsx
// Este modulo requiere React
import React from 'react';
// importacion de iconos y su uso en https://react-icons.github.io/react-icons/
// importacion del icono especifico
import { FaReact } from "react-icons/fa6";

export default class ImportModules extends React.Component {
    render() {
      return <h3> 
        Importacion de modulos (iconos): 
        // uso de icono
        <FaReact />
        </h3>
    }

}
```

```sh
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Fetch from './components/ImportModuls';

root.render(
  <>
    <Fetch />
  </>
);
```

## Hock Reacts
Son funciones proveidas por reacts, para funcionalidad extra de la aplicacion

## UseState
Permite definir el estado de un componente y modificarlo, util para almacenar valores en variables

```sh
// /components/UseState-jsx
// Este modulo requiere React
import React, {useState} from "react";

export default function UseState(){
    // de useState podemos extraer dos valores el primero sera la varible
    // que queramos usar y el segundo la funcion con la cual modifiaremos
    // dicha variable, tener en cuenta siempre llamar la funcion igual que 
    // la variable con la unica diferencia que al principio debemos poner 
    // la palabra clave set, esto por temas de facilidad de lectura
    const [val, setVal] = useState(0);

    return <>
        <h3>Contrador: { val } </h3>
        // para usar el useState podemos apoyarnos de los eventHanler
        <button onClick={() => setVal(val + 1) }>Agregar</button>
    </>
}
```

```sh
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import UseState from './components/UseState';

root.render(
  <>
    <UseState />
  </>
);
```

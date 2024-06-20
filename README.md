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

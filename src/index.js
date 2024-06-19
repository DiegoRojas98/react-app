import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import / Export 
import {add,rest} from './math';
import opertaion , {div} from './math2';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Componentes
function Component(){
  return <h1>este es un componente</h1>
}

function Component2(){
  return <div>
    <h1>Componente multietiquetas</h1>
    <p>Componente con varias etiquetas</p>
  </div>
}

// JSX
function Greet(){
  const name = 'diego';
  return <h2>hola { name }</h2>
}

function Access(){
  const access = true
  return <h1>Acceso { access ? 'Consedido' : 'Denegado' }</h1>
}

function calculateTime(val){
  return val * 10
}

function ShowObject(){
  const user = {
    name : 'Gabo',
    age : '5',
    time : calculateTime(5)
  }
  return <h2>{ JSON.stringify(user) }</h2>
}



root.render(
  <div>
    
    <h1>Hola mundo</h1>


    { Component() }
    <Component></Component>
    <Component/>

    <Component2/>


    <Greet/>
    <Access/>
    <ShowObject/>


    { add(1,3)}  <br/>
    { rest(1,3)}  <br/>
    { opertaion(2,5)}  <br/>
    { div(9,3)} <br/>
  </div>
  /*<React.StrictMode>
    <App />
  </React.StrictMode>
  */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

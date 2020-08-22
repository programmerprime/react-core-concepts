import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Prime', "Taimur", "Arafat", "Aamir", "Salman Khan", "Sonu Sood"];
  const products = [
    {name: 'Photoshop', price: '$20/mo'},
    {name: 'Illustrator', price: '$40/mo'},
    {name: 'After Effects', price: '$10/mo'},
    {name: 'Premiere Pro', price: '$10/mo'},
    {name: 'Audition', price: '$10/mo'}
  ]
  return (
    
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name + " " + product.price}</li>)
          }
        </ul>
        {
          products.map(pro => <Person name = {pro}></Person>)
        }
         
        
      </header>
    </div>
  );
}

function Counter() {
  let [count, countState] = useState(0);
  let increaseValue =  () => countState(count + 1);

  let decreaseValue = () => countState(count - 1);
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={increaseValue} style={{display: 'block', margin: '10px'}}>Increase by 1</button>
      <button onClick={decreaseValue} style={{display: 'block'}}>Decrease by 1</button>
    </div>
  )
}

function Users() {
  const [user, setUser] = useState([]); /// must clear this concept
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  })
  return (
    <div>
      <h3>Hello Prime</h3>
      <ul>
        {
          user.map(u => <li>Name: {u.name}, Phone: {u.phone}, Email: {u.email}</li>)
        }
      </ul>
    </div>
  )
}

function Person(props) {
  const style = {
    width: '200px',
    height: '200px',
    backgroundColor: 'lightgray',
    color: 'black',
    border: '1px solid gray',
    borderRadius: '5px',
    margin: '20px'
  }
  let {name, price} = props.name;
  return (
    <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems: 'center'}}>
        <div style={style}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button style={{padding: '10px 20px', backgroundColor:'green', color: 'white', fontWeight: 'bold', border:'none', outline: 'none', borderRadius: '10px'}}><a>Buy Now</a></button>
    </div>
    </div>
  )
}

export default App;

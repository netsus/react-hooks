import { useInput } from './useinput';
import React, { useEffect, useState } from 'react';


const App = () => {
  const sayHello = () => console.log("hello");
  useEffect(() => {
    sayHello();
  })
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
      </div>
    </div>
  );
}

export default App;

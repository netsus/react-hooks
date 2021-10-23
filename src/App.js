import { useInput } from './useinput';
import React, { useEffect, useRef, useState } from 'react';


const App = () => {
  const tomato = useRef();
  setTimeout(() => {
    tomato.current?.focus();
  },
   2000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={tomato} placeholder="union" />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import { socket } from './socket'


function App() {

  useEffect(()=> {
    // 
    console.log(socket.connected)
    socket.on('a', ()=> {
      console.log('hi');
    })
  },[])
  
  return (
    <div className="App">
      <div>
        hi
      </div>
    </div>
  );
}

export default App;


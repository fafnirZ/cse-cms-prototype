import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import { socket } from './socket'


function App() {

  useEffect(()=> {
    // 
    console.log(socket.connected)
    socket.on('send template', (data)=> {
      console.log(data);
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


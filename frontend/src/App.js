import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import { socket } from './socket'


function App() {

  
  return (
    <div className="App">
      <Stuff/>
    </div>
  );
}




function Stuff() {
  const [data , setData] = useState(null)
  const [loaded, setLoaded] = useState(false);
  useEffect(()=> {
    // 
    console.log(socket.connected)
    socket.on('send template', (data)=> {
      setData(data.split('\n'))
      setLoaded(true)
    })
  },[])

  return (
    <div style={{
      display: 'flex'
    }}>
      <div style={{
        width: '50vw',
        height: '100vh',
      }}>
        {loaded && 
          (data.map(i=> {
            return (
              <div>
                {i}
              </div>
            )
          }))
        }
      </div>

      <iframe src="http://localhost:3001/"
        style={{
          width: '50vw'
        }}
      />
    </div>
  )
}



export default App;


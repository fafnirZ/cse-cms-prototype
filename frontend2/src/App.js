import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import showdown from 'showdown'


const converter = new showdown.Converter()

function App() {

  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(()=> {
    fetch('http://localhost:8080/md')
    .then(data => {
      return data.json();
    })
    .then(data=> {
      setData(data.data)
      setLoaded(true)
    })

  },[])


  return (
    <div className="App">
      {loaded && (
        data.map(i=> {
          return (<div dangerouslySetInnerHTML={{__html: converter.makeHtml(i) }}/>)
        })
      )}
    </div>
  );
}

export default App;

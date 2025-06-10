import { useState } from 'react';
import './App.css';
import TripList from './components/TripList/index.js';

function App() {

  let [show,setShow]=useState(true);  

  return (
    <>
      <button onClick={()=>setShow(false)}>Hide Trips</button>
      {show && <TripList/>}
    </>
  );
}

export default App;

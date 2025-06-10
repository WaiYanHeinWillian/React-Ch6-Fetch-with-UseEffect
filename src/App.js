import { useEffect, useState } from 'react';
import './App.css';
import TripList from './components/TripList/index.js';

function App() {

  let [data,setData]=useState('mydata');

  let myfunction=()=>{
    setData("new update data") //rendering stop
  }

  useEffect(()=>{
    myfunction();
    console.log("running")
  },[myfunction])

  return <>
    <h1>{data}</h1>
    <TripList/>
  </>
}

export default App;

import './App.css'
import React, { useState } from "react";
function App({x}) {
  return (
    <>
      <label>{x}</label>
      <input type='text' placeholder='Hello'></input>
    </>
  );
}
export default App
export function App1({x}) {
  return (
    <>
      <p>{x}</p>
      
    </>
  );
}

export function App2({T,n}) {
  if(n>=T.length){
  return (
    <>
    </>
  );
  }else {
    return(
      <>
      <App x={T[n]}></App>
      <App2 T={T} n={n+1} ></App2>
    </>
  );
  }
}
export function Acounts(){
  const [pdp, setpdp] = useState(null);
  return (
    <>
    <input type='file' value={pdp} id='uppdp' onChange={(e) => setpdp(e.target.files[0])}/>
    </>
  )
}

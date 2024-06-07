import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
   let [counter,setCounter] = useState("")
   //let counter = 15;
  
  
   const addValue = () =>{
   
   
    counter = counter+1
    setCounter(counter)
    console.log("click",counter)
   }

   const removevalue = ()=>{
    // if(counter == 0){
    //      return
    // }
    counter = counter-1
    setCounter(counter)
    console.log("click",counter)
   }


   const handleChange = (event) => {
    setCounter(event.target.value);
};


  return (
    <>
     <h1>React First Project</h1>
     <h2>Counter Value : {counter}</h2>
      <input className="input"onChange={handleChange}></input>
      <br/>
      <button
     onClick={addValue}>input add</button>
     <br/>
     <button
     onClick={addValue}>Add {counter}</button>
     <br />
     <button onClick={removevalue}>Remove {counter}</button>
    </>
  )
}

export default App

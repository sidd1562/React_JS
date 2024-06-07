import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";"./components/Card"


function App() {
  // const [count, setCount] = useState(0);
  // let arr = [1,2,3,4,5]
  // let myObj = {
  //   username : "anime",
  //   Charactername:"gojo",
  //   age:20000
  // }

  return (
    <>
      <h1 className="bg-green-400
        text-black
        p-4 
        rounded-xl
        mb-7">Tailwind</h1>
     <Card animename="dragonballz" chracter="goku"/>
     <Card />



    </>
  );
}

export default App;

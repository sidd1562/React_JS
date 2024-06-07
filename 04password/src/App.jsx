import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setpasswold] = useState("");

  const passref = useRef(null);

 
  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (number) str += "0123456789"
    if (char) str += "!@#$%^&*-_+=[]{}~`"
    // if (number) {
    //   str = str + "0123456789";
    // }
    // if (char) {
    //   str = str + "!@#$%^&*-_+=[]{}~`";
    // }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }

    setpasswold(pass);
  }, [length, number, char, setpasswold]);


  const copypass = useCallback(() => {
    passref.current?.select();
    // passref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerater();
  }, [length, number, char, passwordGenerater]);
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg
   px-4 py-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center text-center my-3">
          Password_Generate
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="Passwold"
            readOnly
            ref={passref}
          />
          <button
            onClick={copypass}
            className="outline-none bg-blue-700
          text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-i"></div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberinput"
            onChange={() => {
              setnumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="numberinput"
            onChange={() => {
              setchar((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;

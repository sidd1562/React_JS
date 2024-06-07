import { useState } from "react";

function App() {
  const [color, setcolor] = useState();

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div
        className="fixed flex flex-wrap justify-center
           bottom-12 inset-x-0 px-2">
        <div
          className="flex flex-warp justify-center
             gap-10 shadow-lg bg-slate-600 px-3 py-2 rounded">
          <button
          onClick={() => setcolor("red")}
            className="outline-none px-4 py-2 rounded-3xl
           text-black shadow-ls"
            style={{ backgroundColor: "Red" }}>
            Red
          </button>
          <button
          onClick={()=> setcolor("Green")}
            className="outline-none px-4 py-2 rounded-3xl
           text-black shadow-ls"
            style={{ backgroundColor: "Green" }}>
            Green
          </button>
          <button
            onClick={()=> setcolor("blue")}
            className="outline-none px-4 py-2 rounded-3xl
           text-black shadow-ls"
            style={{ backgroundColor: "blue" }}>
            blue
          </button>
          <button
             onClick={()=> setcolor("Gray")}
            className="outline-none px-4 py-2 rounded-3xl
           text-black shadow-ls"
            style={{ backgroundColor: "Gray" }}>
            Gray
          </button>
          <button
             onClick={()=> setcolor("yellow")}
            className="outline-none px-4 py-2 rounded-3xl
           text-black shadow-ls"
            style={{ backgroundColor: "yellow" }}>
            Yellow
          </button>
          <button
             onClick={()=> setcolor("Pink")}
            className="outline-none px-4 py-2 rounded-3xl
           text-black shadow-ls"
            style={{ backgroundColor: "Pink" }}>
            Pink
          </button>
          <button
             onClick={()=> setcolor("Purple")}
            className="outline-none px-4 py-2 rounded-3xl
           text-black shadow-ls"
            style={{ backgroundColor: "Purple" }}>
            Purple
          </button>
          <button
             onClick={()=> setcolor("Lavender")}
            className="outline-none px-4 py-2 rounded-3xl
           text-black shadow-ls"
            style={{ backgroundColor: "Lavender" }}>
            Lavender
          </button>
          <button
             onClick={()=> setcolor("while")}
            className="outline-none px-4 py-2 rounded-3xl
           text-black shadow-ls"
            style={{ backgroundColor: "while" }}>
            while
          </button>
          <button
             onClick={()=> setcolor("Black")}
            className="outline-none px-4 py-2 rounded-3xl
           text-white shadow-ls"
            style={{ backgroundColor: "Black" }}>
            Black
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;

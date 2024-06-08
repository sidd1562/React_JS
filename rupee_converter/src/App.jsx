import { useState } from "react";
import { Input_Box } from "./components";
import userupeeInfo from "./hook/userupee";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")



  const [convertAmount, setConvertAmount] = useState(0);

  const rupeeInfo = userupeeInfo(from);

  const option = Object.keys(rupeeInfo);

  console.log(option);

  const swap = () => {
    setfrom(to.toUpperCase());
    setto(from.toUpperCase());
    setConvertAmount(amount);
    setamount(convertAmount);
  };

  const convert = () => {
    setConvertAmount(amount * rupeeInfo[to]);
  };

  const handleRupeeChange = (rupee) => {
    setfrom(rupee.toUpperCase()); // Convert to uppercase before setting state
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `https://images.pexels.com/photos/15936702/pexels-photo-15936702/free-photo-of-basilica-of-the-national-shrine-of-the-blessed-virgin-of-ta-pinu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
      }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
            <div className="w-full mb-1">
              <Input_Box
                label="From"
                amount={amount}
                rupeeOption={option}
                onRupeeChangge={(rupee) => setfrom(rupee)}
                selectRupee={from}
                
                onAmountChange={(amount) => setamount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}>
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input_Box
                label="To"
                amount={convertAmount}
                rupeeOption={option}
                onRupeeChangge={(rupee) => setto(rupee)}
                selectRupee={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

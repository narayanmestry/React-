import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo.js';


function App () {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converttedAmount, setConvertedAmount] = useState(0);
  const swapCurrency = () => {
    if(from === "usd") 
    {
      setFrom("inr");
    }else{
      setFrom("usd");
    }
    
    if(to==="inr"){
      setTo("usd")
    }else{
      setTo("inr");
    }
    setConvertedAmount(amount);
    setAmount(converttedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)
  console.log("From :",from);
  console.log("to :",to);
  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center' style={{background:'black'}}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 bacdrop-blur-sm bg-white/30'>
            <form onSubmit={(e)=>{
              e.preventDefault();
              convert();
            }}>
              <div className='w-full mb-1'>
                <InputBox 
                label="From" 
                amount={amount} 
                currencyOptions = {options} 
                onCurrencyChange = {(currency)=>setAmount(amount)}
                selectCurrency = {from}
                onAmountChange={(amount)=>{
                  setAmount(amount) 
                }}
                />
              </div>
              <div className='relative w-full h-0.5'>
                  <button
                    type='button'
                    className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                    onClick={swapCurrency}>
                      Swap
                  </button>
              </div>
              <div className='w-full mb-1'>
                <InputBox 
                label="To" 
                amount={converttedAmount} 
                currencyOptions = {options} 
                onCurrencyChange = {(currency)=>setTo(currency)}
                selectCurrency = {to}
                amoundDisable 
                />
              </div>
              <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'  >
                Coverted {from.toUpperCase()} TO {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


/* 

useState Hook
useEffect Hook
useRef Hook
useCallback Hook
useMemo Hook
useContext Hook
useReducer Hook


*/
import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App () {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState('');
  // use of useRef
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) {
      str += "0123456789";
    }
    if (isCharacter) {
      str += "!@#$%^&*(){}_+<>?][";
    }
    for (let i=1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
      console.log("password====",pass);
      console.log("character======,char");
    }
    
    setPassword(pass);
  }, [length, isNumber, isCharacter,setPassword])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  // const copyToClipboard =()=>{
  //   window.navigator.clipboard.writeText(password)
  // }

  useEffect(()=>{
    passwordGenerator();
  },[length,isNumber, isCharacter,passwordGenerator,setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-3 my-8 text-orange-600 bg-gray-600'>
        <h1 className='m-0 py-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0' onClick={copyToClipboard}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            id='range'
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            />
            <label htmlFor="range" className='text-orange-600 ml-2'>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
              defaultChecked = {isNumber}
              id='is_number'
              onChange={()=>{
                setIsNumber((prev)=>!prev)
              }}
              />
            <label htmlFor="is_number">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
              defaultChecked = {isCharacter}
              id='is_Character'
              onChange={()=>{
                setIsCharacter((prev)=>!prev)
              }}
              />
            <label htmlFor="is_Character">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

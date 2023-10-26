import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardComponent from './Components/CardComponent';

function App () {

  return (
    <>
      <h1 className='bg-green-400 text-white mb-3'>React JS counter</h1>
      <CardComponent username="chetan" btnText="Save"/>
      <CardComponent username="Mestry" btnText="Submit"/>
 


    </>
  )
}

export default App

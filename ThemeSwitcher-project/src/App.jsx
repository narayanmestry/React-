import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import {ThemeProvider} from './context/theme'

function App () {
  const [themeMode,setThemeMode] = useState('light');
  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () =>{
    setThemeMode('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* ThemeButton */}
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
          {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App



/* 
1. create the two card




*/
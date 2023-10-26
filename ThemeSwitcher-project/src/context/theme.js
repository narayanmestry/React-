import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme () {
    return useContext(ThemeContext);
}

/*
Step 1 > Create the file with .js extentmions 
         EX. Contetxt > theme.js

        1.1 Import createContext and useContext         
             EX. import { createContext, useContext } from "react";

        1.2 Create the context to define globle variable 

             EX. export const ThemeContext = createContext({
                    themeMode : "light",
                    darkTheme : () =>{},
                    lightTheme : () =>{}
                })

        1.3 export Provider of created Context 

             EX. export const ThemeProvider = ThemeContext.Provider;

        1.4 create custom hook to access the globle variable using useContex
             
            EX. export default function useTheme(){
                return useContext(ThemeContext);
                }


Step 2. Wrap the whole application using Provider which you have export in step 1.3
        EX. <ThemeProvider>
                <App/>
            </ThemeProvider> 
            
        2.1> access the globle variable here in value So you can access it anywhere in Application 
         EX. <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
                <App/>
            </ThemeProvider> 

        2.2> Define the globle variable and method which are access in the value for updation purpose
          
                const [themeMode,setThemeMode] = useState('light');
                const darkTheme = () => {
                  setThemeMode('dark')
                }

                const lightTheme = () =>{
                  setThemeMode('light')
                }

Step 3> Access the variables in component 
        3.1> import useTheme which you have create in step 1.4 as custom hook
        3.2> access the globle variable :
                  const {themeMode,lightTheme,darkTheme} =useTheme();






        
        
*/
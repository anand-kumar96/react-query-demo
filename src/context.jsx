import React, { createContext, useContext, useEffect, useState } from 'react'
const AppContext = createContext();
export const useGlobalContext = ()=> useContext(AppContext);
// javascript darkMode code
const getInitialDarkMode = () =>{
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark').matches;
  const storedDarkMode = JSON.parse(localStorage.getItem('dark'))
  return storedDarkMode|| prefersDarkMode;
}
const AppProvider = ({children}) => {
     const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode); // instaed of hard coded false use prefersDarkMode
     const[query,setQuery] = useState('cat');
     const toggleDarkTheme = () => {
      const newDarkTheme  = !isDarkTheme;
      setIsDarkTheme(newDarkTheme);
      // storing in localStorage if user did not have default dark theme
      localStorage.setItem('dark', isDarkTheme);
     }
    // execute of every chnages of isDarkTheme 
    useEffect(()=>{
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme',isDarkTheme); // classList has toggle method which take two value 
                                                    // if isDarkTheme true then it add dark-mode if false it remove

  },[isDarkTheme])
  return (
    <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,query,setQuery}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider
import { createContext, useState } from "react";
const ThemeContext=createContext()
console.log(ThemeContext)
const ThemeContextProvider=({children})=>{
    const themes={
        light:{
            value:"light",
            bgColor:'white',
            txtColor:'black',
        },
        dark:{
            value:"dark",
            bgColor:'black',
            txtColor:'white',
        }
    }
    const[isAuth,setAuth]=useState(false)
    const[theme,setTheme]=useState(themes.light)
    const login=()=>{
        setAuth(true)
    }
    const logout=()=>{
        setAuth(false)
    }
    const toggleTheme=()=>{
        setTheme(theme.bgColor==="white"?themes.dark:themes.light)
    }
    console.log(theme)
    // in rigged game only fools play by the rules
    return<ThemeContext.Provider value={{toggleTheme,theme,isAuth,login,logout}} >{children}</ThemeContext.Provider>
}
export default ThemeContextProvider
export {ThemeContext}
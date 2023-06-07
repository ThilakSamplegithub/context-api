import { useContext } from "react"
import { ThemeContext } from "../ContextApi/ThemeContextApi"

export default function Main(){
    const{theme,toggleTheme}=useContext(ThemeContext)
    return(
        <>
        <p style={{backgroundColor:theme.bgColor,color:theme.txtColor}} >Main</p>
        <p>Theme is {theme.value}</p>
        </>
    )
}
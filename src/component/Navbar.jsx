import { useContext } from "react"
import { ThemeContext } from "../ContextApi/ThemeContextApi"
import Button from "./Button"
export default function Navbar(){
    const{toggleTheme,theme,isAuth,login,logout}=useContext(ThemeContext)
    return(
        <>
        <p>is User Authenticated:{isAuth?'Yes':'No'}</p>
        <Button disabled={isAuth} btnText={'login'} onClick={login} /><Button disabled={!isAuth} btnText={'logout'} onClick={logout} />
        <p style={{backgroundColor:theme.bgColor,color:theme.txtColor}}>Navbar</p>
        <Button btnText={theme.value} onClick={toggleTheme} />
        </>
    )
}
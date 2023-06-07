export default function Button({btnText,onClick,disabled}){
    return(
        <>
        <button disabled={disabled} onClick={onClick}>{btnText}</button>
        </>
    )
}
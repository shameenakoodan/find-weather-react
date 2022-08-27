const Button =(props)=>{
    const {title,handleClick} = props
    return (
        <div>
            <button onClick={handleClick}>{title}</button>
        </div>
    )
}
export default Button;
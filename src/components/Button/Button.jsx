import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind,faArrowUp,faArrowDown,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Button =(props)=>{
    const {title,handleClick} = props
    return (
        <div>
            <button onClick={handleClick}><FontAwesomeIcon icon={faMagnifyingGlass}  size="2x"/></button>
        </div>
    )
}
export default Button;
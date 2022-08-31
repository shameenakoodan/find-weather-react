import './SearchBox.scss'; 
const SearchBox = (props)=>{
    const {handleChange} = props;
    return (
        <div className='input-box'>
            <input type="text" placeholder="Enter the city name" onChange={handleChange}/>
        </div>
    )
}
export default SearchBox;
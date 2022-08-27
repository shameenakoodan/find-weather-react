const SearchBox = (props)=>{
    const {handleChange} = props;
    return (
        <div>
            <input type="text" placeholder="Enter the city name" onChange={handleChange}/>
        </div>
    )
}
export default SearchBox;
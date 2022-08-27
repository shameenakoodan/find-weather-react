import Button from "../../components/Button/Button";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useState } from 'react';
import WeatherCard from "../../components/WeatherCard/WeatherCard";


const MainContainer = ()=>{
    const [searchKey,setSearchKey] = useState('');
    const [currentWeather,setCurrentWeather] = useState([]);

    const [isDisplayed,setisDisplayed] = useState(false);
    const toggleDisplay = () =>{
        setisDisplayed(!isDisplayed);
    }
    let lat = 0.0;
    let lon= 0.0;

    const findtheWeather=(event)=>{
        const appid = '07765a8cf9d1978f1eeb9cad04e25eae'
        const city = searchKey;
        const metric = "imperial";
        //fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`)
       /* fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${appid}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setCurrentWeather(data);
            lat = data[0].lat;
            lon = data[0].long;
        });*/
        //weather?lat={lat}&lon={lon}&appid={API key}
       //fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=${metric}`)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${metric}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setCurrentWeather(data);
            console.log(data);
            toggleDisplay();
        });

    }
    const handleChange = (event)=>{
        setSearchKey(event.target.value);
    }
    return(
        <div>
            <SearchBox handleChange = {handleChange}/>
            <Button title={"Search"} handleClick={findtheWeather}/>
            {isDisplayed && <WeatherCard currentWeather = {currentWeather} toggleDisplay={toggleDisplay}/>}
        </div>
    )
}
export default MainContainer;

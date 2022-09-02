import Button from "../../components/Button/Button";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useState } from 'react';
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import WeatherHistory from "../../WeatherHistory/WeatherHistory";
import "./MainContainer.scss";

const MainContainer = () => {
    const [searchKey, setSearchKey] = useState('');
    const [currentWeather, setCurrentWeather] = useState([]);
    const [historyData, setHistoryData] = useState([]);

    const [isDisplayed, setisDisplayed] = useState(false);
    const [displayHistory,setdisplayHistory] = useState(false);

   /* const findtheWeather = (event) => {
        setdisplayHistory(false);
        setisDisplayed(false);
        const appid = '07765a8cf9d1978f1eeb9cad04e25eae'
        const city = searchKey;
        const metric = "imperial";
        //Retrieve the weather data for the entered city
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${metric}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                
                setisDisplayed(true);
                setCurrentWeather(data);
                if (data.hasOwnProperty("message")) {
                    alert(data.message);
                    setisDisplayed(false);
                    //toggleDisplay();
                }
                else {
                    setCurrentWeather(data);
                    const newWeather = {
                        "city_num": currentWeather.id,
                        "city_name": currentWeather.name,
                        "temperature": currentWeather.main.temp,
                        "feels_like": currentWeather.main.feels_like,
                        "description": currentWeather.weather[0].main,
                        "wind": currentWeather.wind.speed,
                        "pressure": currentWeather.main.pressure,
                        "high": currentWeather.main.temp_max,
                        "low": currentWeather.main.temp_min
                    }
                    fetch("http://localhost:3002/api/weather/", {
                        method: 'POST',
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify(newWeather)
                    }).then(() => {
                        console.log("New Weather Added");
                    });
                    ///Check the database for the city id
                    fetch(`http://localhost:3002/api/weather/cityid/${currentWeather.id}`)
                        .then((res) => {
                            return res.json()
                        })
                        .then((data) => {
                            setHistoryData(data);
                            setdisplayHistory(true);
                            if (data.id === currentWeather.city_num) {
                                console.log("Found in db");
                                
                            }
                            else {
                                console.log('not found in the db');
                            }
                        })
                }
            });
    }*/
    
    const findtheWeather = (event)=>{
        const appid = '07765a8cf9d1978f1eeb9cad04e25eae'
        const city = searchKey;
        const metric = "imperial";
        //Get the weather data to be displayed and add it to the database
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${metric}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            //Check if the entered value is a valid city name
            //Alert the error message
            //Otherwise add it to the database
            if (data.hasOwnProperty("message")) {
                alert(data.message);
                setisDisplayed(false);
            }else{
                //Check for historic data
                checkforHistoricData(data);
                //Add this to the database
                addtoDatabase(data);
                setCurrentWeather(data);
                setisDisplayed(true);
                
            }          
        })
    }
    const checkforHistoricData =(currentWeather)=>{
        fetch(`http://localhost:3002/api/weather/cityid/${currentWeather.id}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            if (currentWeather.city_num === data.id) {
                console.log("Found in db");
                setHistoryData(data);
                setdisplayHistory(true);
            }
            else {
                console.log('not found in the db');
            }
        });
    }
    const addtoDatabase=(data)=>{
        const newWeather = {
            "city_num": data.id,
            "city_name": data.name,
            "temperature": data.main.temp,
            "feels_like": data.main.feels_like,
            "description": data.weather[0].main,
            "wind": data.wind.speed,
            "pressure": data.main.pressure,
            "high": data.main.temp_max,
            "low": data.main.temp_min
        }
        fetch("http://localhost:3002/api/weather/", {
                        method: 'POST',
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify(newWeather)
                    }).then(() => {
                        console.log("New Weather Added");
                    });
        console.log("new Weather" + newWeather)
    }
    const handleChange = (event) => {
        setSearchKey(event.target.value);
    }
    return (
        <div className="main-class">
            <div className="search">
                <SearchBox handleChange={handleChange} />
                <Button title={"Search"} handleClick={findtheWeather} />
            </div>
                {isDisplayed && <WeatherCard currentWeather={currentWeather}  />}
            <div>
                {displayHistory && <WeatherHistory historyData={historyData} />}
            </div>

        </div>
    )
}
export default MainContainer;

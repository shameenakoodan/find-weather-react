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
    const toggleDisplay = () => {
        setisDisplayed(!isDisplayed);
    }
    // let lat = 0.0;
    // let lon= 0.0;

    const findtheWeather = (event) => {
        const appid = '07765a8cf9d1978f1eeb9cad04e25eae'
        const city = searchKey;
        const metric = "imperial";
        //Retrieve the weather data for the entered city
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${metric}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setCurrentWeather(data);
                setisDisplayed(true);
                if (data.hasOwnProperty("message")) {
                    alert(data.message);
                    setisDisplayed(false);
                    //toggleDisplay();
                }
                else {
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
                            // console.log(data);
                            setisDisplayed(true);
                            setHistoryData(data);
                            if (data.id === currentWeather.city_num) {
                                console.log("Found in db");

                            }
                            else {
                                console.log('not found in the db');
                            }
                        })
                }
            });
    }
    //Check the database if there is any historic data
    const checkMydatabase = (id) => {
        fetch(`http://localhost:3002/api/weather/cityid/${id}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                return data;
            })

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
            {isDisplayed && <WeatherCard currentWeather={currentWeather} toggleDisplay={toggleDisplay} />}
            <div>
                {isDisplayed && <WeatherHistory historyData={historyData} />}
            </div>

        </div>
    )
}
export default MainContainer;

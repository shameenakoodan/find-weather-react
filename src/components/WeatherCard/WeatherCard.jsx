
const WeatherCard = (props)=>{
    const {currentWeather,toggleDisplay} = props;
    return (
        <div className="weather-card">
            <p> City Name : {currentWeather.name}</p>
            <p>Temperature : {currentWeather.main.temp}</p>
            <p>Feels Like : {currentWeather.main.feels_like}</p>
            <p>Description : {currentWeather.weather[0].main}</p>
            <p>Wind :{currentWeather.wind.speed}</p>
            <p>Pressure : {currentWeather.main.pressure}</p>
            <p>High: {currentWeather.main.temp_max}</p>
            <p>Low: {currentWeather.main.temp_min}</p>
        </div>
    )
}
export default WeatherCard;
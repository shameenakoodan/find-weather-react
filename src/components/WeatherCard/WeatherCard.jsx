import './WeatherCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind,faArrowUp,faArrowDown } from '@fortawesome/free-solid-svg-icons'

const WeatherCard = (props) => {
    const { currentWeather, toggleDisplay } = props;
    const iconurl = "http://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@2x.png";
    return (
        <div className="weather-card">
            <h3>Current Weather</h3>
            <div className='weather-details'>
                <div className='left-side'>
                    <p>{currentWeather.name}</p>
                    <img src={iconurl}/>
                    <p>{currentWeather.weather[0].main}</p>                    
                </div>
                <div className='temp-class'>
                    <p>{currentWeather.main.temp}&deg;F </p>
                </div>
                <div className='right-side'>
                    <p>Feels Like {currentWeather.main.feels_like}&deg;</p>
                    <p><FontAwesomeIcon icon={faWind} /> {currentWeather.wind.speed} miles/hr</p>
                    <p>Pressure : {currentWeather.main.pressure}</p>
                    <p><FontAwesomeIcon icon={faArrowUp} />  {currentWeather.main.temp_max}&deg;F 
                       <FontAwesomeIcon icon={faArrowDown} /> {currentWeather.main.temp_min}&deg;F   </p>                    
                </div>
            </div>
        </div>
    )
}
export default WeatherCard;
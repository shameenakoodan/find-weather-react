import './HistoryCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faWind,faCalendarDays} from '@fortawesome/free-solid-svg-icons'

const HistoryCards = (props) => {
    const { weather } = props;

    //Extract date from the sql date
    const date = new Date(weather.createdAt).toLocaleDateString("en-US");
    //Extract time from the sql date

    var time = new Date(weather.createdAt).toLocaleTimeString("en-US")
    return (
        <div className="history-card">
            <p>{weather.city_name}</p>
            <p><FontAwesomeIcon icon={faCalendarDays} />{date}</p>
            <p><FontAwesomeIcon icon={faClock} />{time}</p>
            <p>{weather.temperature}&deg;F</p>
            <p>Feels Like : {weather.feels_like}&deg;F</p>
            <p>{weather.description}</p>
            <p><FontAwesomeIcon icon={faWind} />{weather.wind}</p>
            <p>Pressure : {weather.pressure}</p>
            <p>{weather.high}&deg;F / {weather.low}&deg;F</p>
            
        </div>
    )
}
export default HistoryCards;
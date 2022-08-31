import HistoryCards from "../components/HistoryCards/HistoryCards";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import './WeatherHistory.scss';

const WeatherHistory = (props)=>{
    const {historyData} = props;
    console.log("Data history"+props.historyData);
    const weatherDetails = historyData.map((weather)=>{
        return (
        <div key={weather.id}>
                    
                    <HistoryCards weather = {weather}></HistoryCards>
        </div>) 
    })
return (
    <div>
        <h3>Historic Data</h3>
        <div className="weather-history">{weatherDetails}</div>
    </div>
)
    
}
export default WeatherHistory;

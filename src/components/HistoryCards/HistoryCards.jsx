import './HistoryCard.scss';

const HistoryCards = (props) => {
    const { weather } = props;
    const date = new Date(weather.createdAt).toLocaleDateString("en-US");

    var time = new Date(1504095567183).toLocaleTimeString("en-US")


    return (
        <div className="history-card">
            <p>On:{date} at {time}</p>
            <p>{weather.temperature}&deg;F</p>
            <p>Feels Like : {weather.feels_like}&deg;F</p>
            <p>{weather.description}</p>
            <p>Wind :{weather.wind}</p>
            <p>Pressure : {weather.pressure}</p>
            <p>{weather.high}&deg;/{weather.low}&deg;</p>
            
        </div>
    )
}
export default HistoryCards;
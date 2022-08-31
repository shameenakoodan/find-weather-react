import './HistoryCard.scss';

const HistoryCards = (props) => {
    const { weather } = props;
    return (
        <div className="history-card">
            <p>On:{weather.createdAt}</p>
            <p>{weather.temperature}&deg;</p>
            <p>Feels Like : {weather.feels_like}</p>
            <p>{weather.description}</p>
            <p>Wind :{weather.wind}</p>
            <p>Pressure : {weather.pressure}</p>
            <p>{weather.high}&deg;/{weather.low}&deg;</p>
            
        </div>
    )
}
export default HistoryCards;
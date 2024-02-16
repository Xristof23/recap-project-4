import "./Weather.css";

export default function Weather({ isGoodWeather, temperature }) {
  return (
    <section className="weather-container">
      <p className="smilie">
        {isGoodWeather ? <span>🌞</span> : <span>⛈️</span>}
      </p>
      <p className="temperature">{temperature} °C</p>
    </section>
  );
}

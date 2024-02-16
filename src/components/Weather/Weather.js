export default function Weather({ isGoodWeather, temperature }) {
  return (
    <>
      <p> {isGoodWeather ? <span>🌞</span> : <span>⛈️</span>}</p>
      <p>{temperature} °C</p>
    </>
  );
}

import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";

const initialActivities = [
  { id: 1, name: "Walking", isForGoodWeather: true },
  { id: 2, name: "Watch television", isForGoodWeather: false },
];

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: initialActivities,
  });

  const [isGoodWeather, setIsGoodWeather] = useState(true);
  const [temperature, setTemperature] = useState(888);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const data = await response.json();
        setIsGoodWeather(data.isGoodWeather);
        setTemperature(data.temperature);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeatherData();
  }, []);

  function handleActivity(name, isForGoodWeather) {
    setActivities([
      ...activities,
      {
        id: uid(),
        name: name,
        isForGoodWeather: isForGoodWeather,
      },
    ]);
  }

  return (
    <div className="App">
      <h1>Super Weather App 3000</h1>
      {isGoodWeather ? <span>🌞</span> : <span>⛈️</span>}
      <p>{temperature} °C</p>
      <List activities={activities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleActivity} />
    </div>
  );
}

export default App;

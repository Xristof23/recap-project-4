import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import Weather from "./components/Weather/Weather";

const initialActivities = [
  { id: 1, name: "Walking", isForGoodWeather: true },
  { id: 2, name: "Watch television", isForGoodWeather: false },
];

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: initialActivities,
  });

  const [isGoodWeather, setIsGoodWeather] = useState(true);
  const [temperature, setTemperature] = useState(20);

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
    const interval = setInterval(fetchWeatherData, 5000);

    return () => {
      clearInterval(interval);
    };
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

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      <h1>Super Weather App 3000</h1>
      <Weather isGoodWeather={isGoodWeather} temperature={temperature} />
      <List
        activities={activities}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleActivity} />
    </div>
  );
}

export default App;

import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";

const initialActivities = [
  { id: 1, name: "Walking", isForGoodWeather: true },
  { id: 2, name: "Watch television", isForGoodWeather: false },
];

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: initialActivities,
  });
  const isGoodWeather = true;

  function handleActivity(name, isForGoodWeather) {
    setActivities([
      ...activities,
      {
        id: uid(),
        name: name,
        isForGoodWeather: isForGoodWeather === "on" ? true : false,
      },
    ]);
  }

  //console.log(activities);

  return (
    <div className="App">
      <h1>Super Weather App 3000</h1>
      <List activities={activities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleActivity} />
    </div>
  );
}

export default App;

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and: "
          : "Bad weather outside!Here's what you can do now:"}
      </h2>
      <ul>
        {activities
          .filter((activity) => activity.isForGoodWeather === isGoodWeather)
          .map((activity) => (
            <li key={activity.id}>
              {activity.name}
              <button
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                ❌
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

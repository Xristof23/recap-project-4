export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data.name, data.isForGoodWeather);
    //console.log(data.isForGoodWeather);
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new activity</h2>
      <label htmlFor="name">
        Name of activity: <input name="name" type="text" required></input>
      </label>
      <br />
      <label htmlFor="isForGoodWeather">
        Good-weather activity:
        <input name="isForGoodWeather" type="checkbox" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

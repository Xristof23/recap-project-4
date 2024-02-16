import "./Form.css";
export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    onAddActivity(
      event.target.elements.name.value,
      event.target.elements.isForGoodWeather.checked
    );
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-header">Add new activity</h2>
      <label htmlFor="name">
        Name of activity: <input name="name" type="text" required></input>
      </label>
      <br />
      <label htmlFor="isForGoodWeather">
        Good-weather activity:
        <input name="isForGoodWeather" type="checkbox" />
      </label>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

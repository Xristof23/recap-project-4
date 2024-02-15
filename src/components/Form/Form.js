export default function Form({ onAddActivity }) {
  return (
    <form>
      <h2>Activity Form</h2>
      <label htmlFor="name">
        Name of activity <input name="name" type="text"></input>
      </label>
      <label htmlFor="check">
        Weather activity (good or bad)
        <input name="check" type="checkbox"></input>
      </label>
      <button onClick={onAddActivity} type="submit">
        Submit
      </button>
    </form>
  );
}

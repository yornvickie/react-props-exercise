import Exercise from "./exercise/Exercise";

function App() {
  return (
    <div className="App">
      <Exercise />
      <Exercise 
      good = "Awesome"
      bad = "Terrible"
      />
    </div>
  );
}

export default App;

import "./App.css";
import arrayOfObjects from "./components/assets/movies_rnexgr.json";
import Section from "./components/Section";

console.log(arrayOfObjects);
function App() {
  return (
    <div className="App">
      {arrayOfObjects.map((item, index) => {
        return (
          <Section
            category={item.category}
            key={index}
            arrayOfImages={item.images}
          />
        );
      })}
    </div>
  );
}

export default App;

import "./App.css";
import Logo from "./components/Logo";
import arrayOfObjects from "./components/assets/movies_rnexgr.json";
import Section from "./components/Section";

// console.log(logo);
function App() {
  return (
    <div className="App">
      <Logo />
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

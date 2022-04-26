import "./App.css";
import logo from "./components/assets/images/logoNetflix.png";
import arrayOfObjects from "./components/assets/movies_rnexgr.json";
import Section from "./components/Section";

// console.log(arrayOfObjects);
function App() {
  return (
    <div className="App">
      <div className="logo">
        <img scr={logo} key="logo1" />
      </div>
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

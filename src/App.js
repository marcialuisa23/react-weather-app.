import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Porto"/>
        <footer>
          This project was coded by{" "}
          <a href="https://incandescent-semolina-99a056.netlify.app/">
            {" "}
            Marcia Monteiro{" "}
          </a>{" "}
          and is {""}{" "}
          <a href="https://github.com/marcialuisa23/react-weather-app.">
            {" "}
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

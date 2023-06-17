import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Porto" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://incandescent-semolina-99a056.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Marcia Monteiro{" "}
          </a>{" "}
          and is {""}{" "}
          <a
            href="https://github.com/marcialuisa23/react-weather-app."
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
          and {""}
          <a
            href="https://prismatic-hamster-6daf3d.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

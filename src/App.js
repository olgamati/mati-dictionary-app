import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Definition dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project is coded by{" "}
            <a
              href="https://olga-plotnikova.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Olga Plotnikova
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/olgamati/mati-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

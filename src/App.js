import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Card />
      </div>
    </div>
  );
}

export default App;

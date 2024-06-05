import { Route, Routes } from "react-router-dom";
import "./App.css";
import DigitalClock from "./apps/DigitalClock";
import Stopwatch from "./apps/Stopwatch";
import ToDoList from "./apps/ToDoList";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/digital-clock" element={<DigitalClock />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </div>
  );
}

export default App;

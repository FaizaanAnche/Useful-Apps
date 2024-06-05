import './App.css';
import DigitalClock from './apps/DigitalClock';
import Stopwatch from './apps/Stopwatch';
import ToDoList from './apps/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>USEFUL APPS</h1>
      <ToDoList/>
      <DigitalClock/>
      <Stopwatch/>
    </div>
  );
}

export default App;

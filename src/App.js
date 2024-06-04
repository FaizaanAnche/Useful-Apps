import './App.css';
import DigitalClock from './apps/DigitalClock';
import ToDoList from './apps/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>USEFUL APPS</h1>
      <ToDoList/>
      <DigitalClock/>
    </div>
  );
}

export default App;

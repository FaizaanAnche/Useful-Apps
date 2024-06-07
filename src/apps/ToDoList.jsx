import { useTaskStore } from "./store";

const ToDoList = () => {
  const { tasks, newTask, setNewTask, addTask, removeTask, moveUp, moveDown } =
    useTaskStore();

  return (
    <div className="useful-app">
      <h2>TO DO LIST</h2>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        id="task-input"
      />
      <button onClick={() => addTask()} id="add-task-button">
        Add Task
      </button>
      <ol id="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div id="task-options">
              <button onClick={() => removeTask(index)}>❌</button>
              <button onClick={() => moveUp(index)}>⬆</button>
              <button onClick={() => moveDown(index)}>⬇</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;

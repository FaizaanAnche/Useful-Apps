import { useState } from "react";

const ToDoList = () => {

    let [tasks, setTasks] = useState(["task 1","task 2","task 3","task 4"]);
    let [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const handleAddTask = () => {
        if(newTask.trim() !== ""){
            setTasks(prevTasks => [...prevTasks,newTask]);
        }
        setNewTask("");
    }

    const handleDeleteTask = (index) => {
        setTasks(prevTasks => prevTasks.filter((_,i) => i!==index));
    }

    const handleMoveUp = (index) => {
        
        if(index>0){
            console.log("Move up");
            let updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = 
            [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    const handleMoveDown = (index) => {
        
        if(index < tasks.length-1){
            console.log("Move Down");
            let updatedTasks = [...tasks];
            [updatedTasks[index+1],updatedTasks[index]] = 
            [updatedTasks[index],updatedTasks[index+1]]
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="useful-app">
            <h2>TO DO LIST</h2>
            <input 
                type="text" 
                placeholder="Enter a task..." 
                value={newTask}
                onChange={handleInputChange}
                id="task-input"
            />
            <button onClick={()=>handleAddTask()} id="add-task-button">Add Task</button>
            <ol id="task-list">
                {tasks.map((task,index) => 
                    <li key={index}>{task}
                    <div id="task-options">
                    <button onClick={()=>handleDeleteTask(index)}>❌</button>
                    <button onClick={()=>handleMoveUp(index)}>⬆</button>
                    <button onClick={()=>handleMoveDown(index)}>⬇</button>
                    </div> 
                    </li>
                )}
            </ol>
        </div>
    );
};

export default ToDoList;
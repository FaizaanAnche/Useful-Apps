import { create } from "zustand";

//To Do App store
export const useTaskStore = create((set) => ({
  tasks: [],
  newTask: "",

  setNewTask: (task) => set(() => ({ newTask: task })),

  addTask: () =>
    set((state) => {
      if (state.newTask.trim() !== "") {
        return { tasks: [...state.tasks, state.newTask] };
      }
    }),

  removeTask: (index) =>
    set((state) => {
      return { tasks: state.tasks.filter((_, i) => i !== index) };
    }),

  moveUp: (index) =>
    set((state) => {
      if (index !== 0) {
        let updatedTasks = [...state.tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [
          updatedTasks[index - 1],
          updatedTasks[index],
        ];
        return { tasks: updatedTasks };
      }
      return state;
    }),

  moveDown: (index) =>
    set((state) => {
      if (index < state.tasks.length - 1) {
        let updatedTasks = [...state.tasks];
        [updatedTasks[index + 1], updatedTasks[index]] = [
          updatedTasks[index],
          updatedTasks[index + 1],
        ];
        return { tasks: updatedTasks };
      }
      return state;
    }),
}));

export const useTimeStore = create((set) => ({
  isRunning: false,
  elapsedTime: 0,

  start: () => set(() => ({ isRunning: true })),
  stop: () => set(() => ({ isRunning: false })),
  reset: () => set(() => ({ isRunning: false, elapsedTime: 0 })),
  setElapsedTime: (time) => set(() => ({ elapsedTime: time })),
}));

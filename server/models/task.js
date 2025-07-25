let tasks = [];
let id = 1;

function getAllTasks() {
  return tasks;
}

function createTask(title) {
  const task = { id: id++, title, completed: false };
  tasks.push(task);
  return task;
}

function getTask(id) {
  return tasks.find(task => task.id === id);
}

function updateTask(id, updates) {
  const task = getTask(id);
  if (!task) return null;
  Object.assign(task, updates);
  return task;
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}

function resetTasks() {
  tasks = [];
  id = 1;
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask, resetTasks };

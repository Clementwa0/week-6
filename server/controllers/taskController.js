const Task = require('../models/task');

exports.getAll = (req, res) => {
  res.json(Task.getAllTasks());
};

exports.create = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const task = Task.createTask(title);
  res.status(201).json(task);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const task = Task.updateTask(id, req.body);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

exports.delete = (req, res) => {
  const id = parseInt(req.params.id);
  Task.deleteTask(id);
  res.status(204).end();
};

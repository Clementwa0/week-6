const Task = require('../../models/task');

beforeEach(() => Task.resetTasks());

describe('Task Model', () => {
  test('createTask should add a task', () => {
    const task = Task.createTask('Write tests');
    expect(task.title).toBe('Write tests');
    expect(task.completed).toBe(false);
  });

  test('getTask should return the correct task by ID', () => {
    const task = Task.createTask('Sample Task');
    const fetched = Task.getTask(task.id);
    expect(fetched).toEqual(task);
  });

  test('updateTask should update task fields', () => {
    const task = Task.createTask('Old Title');
    const updated = Task.updateTask(task.id, { title: 'New Title', completed: true });
    expect(updated.title).toBe('New Title');
    expect(updated.completed).toBe(true);
  });

  test('deleteTask should remove a task', () => {
    const task = Task.createTask('To Delete');
    Task.deleteTask(task.id);
    expect(Task.getTask(task.id)).toBeUndefined();
  });
});

const request = require('supertest');
const app = require('../app')
const Task = require('../models/task');

beforeEach(() => {
  Task.resetTasks();
});

describe('Task API', () => {
  it('should create a new task', async () => {
    const res = await request(app).post('/api/tasks').send({ title: 'Test Task' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Task');
  });

  it('should return all tasks', async () => {
    await request(app).post('/api/tasks').send({ title: 'Task 1' });
    const res = await request(app).get('/api/tasks');
    expect(res.body.length).toBe(1);
  });

  it('should update a task', async () => {
    const postRes = await request(app).post('/api/tasks').send({ title: 'Update Me' });
    const id = postRes.body.id;
    const updateRes = await request(app).put(`/api/tasks/${id}`).send({ completed: true });
    expect(updateRes.body.completed).toBe(true);
  });

  it('should delete a task', async () => {
    const postRes = await request(app).post('/api/tasks').send({ title: 'Delete Me' });
    const id = postRes.body.id;
    const deleteRes = await request(app).delete(`/api/tasks/${id}`);
    expect(deleteRes.statusCode).toBe(204);
  });
});

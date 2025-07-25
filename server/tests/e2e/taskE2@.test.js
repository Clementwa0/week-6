const request = require('supertest');
const app = require('../../app');
const Task = require('../../models/task');

beforeEach(() => Task.resetTasks());

describe('Task E2E', () => {
  test('User journey: create → list → update → delete', async () => {
    // Create
    const created = await request(app).post('/api/tasks').send({ title: 'Full Flow' });
    expect(created.statusCode).toBe(201);

    const listed = await request(app).get('/api/tasks');
    expect(listed.body.length).toBe(1);

    const updated = await request(app).put(`/api/tasks/${created.body.id}`).send({ completed: true });
    expect(updated.body.completed).toBe(true);

    await request(app).delete(`/api/tasks/${created.body.id}`);
    const afterDelete = await request(app).get('/api/tasks');
    expect(afterDelete.body).toHaveLength(0);
  });
});

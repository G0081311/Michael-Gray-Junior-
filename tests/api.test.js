/**
 * Example test file
 */

const request = require('supertest');
const app = require('../index');

describe('Health Check Endpoints', () => {
  test('GET /health should return 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /api/v1/health should return service info', async () => {
    const res = await request(app).get('/api/v1/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.service).toBe('Cortex Platform API');
  });

  test('GET /api/v1/status should return system info', async () => {
    const res = await request(app).get('/api/v1/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('uptime');
  });
});

/**
 * Basic API Routes
 */

const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Cortex Platform API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

router.get('/status', (req, res) => {
  res.json({
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    cpu: process.cpuUsage(),
  });
});

router.post('/auth/login', (req, res) => {
  res.json({ message: 'Login endpoint - to be implemented' });
});

router.post('/auth/register', (req, res) => {
  res.json({ message: 'Register endpoint - to be implemented' });
});

module.exports = router;

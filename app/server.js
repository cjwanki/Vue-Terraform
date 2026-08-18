const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BME Ticketing Application</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', system-ui, sans-serif;
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
      color: #e0e0e0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    h1 {
      font-size: 2.5rem;
      background: linear-gradient(90deg, #00d4ff, #7b2cbf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
    }
    .subtitle { color: #a0a0a0; margin-bottom: 2rem; }
    .ticket-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      padding: 2rem 3rem;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      text-align: center;
      max-width: 420px;
    }
    .status {
      display: inline-block;
      background: #00c853;
      color: #000;
      font-weight: 700;
      padding: 0.35rem 1rem;
      border-radius: 999px;
      font-size: 0.9rem;
      margin: 1rem 0;
    }
    .meta { font-size: 0.85rem; color: #888; margin-top: 1.5rem; }
    .badge {
      display: inline-block;
      background: #1a237e;
      color: #82b1ff;
      padding: 0.25rem 0.75rem;
      border-radius: 6px;
      font-size: 0.8rem;
      margin-top: 1rem;
    }
  </style>
</head>
<body>
  <h1>🎫 BME Ticketing App</h1>
  <p class="subtitle">Containerized • Pushed to ECR • Running on ECS Fargate</p>
  
  <div class="ticket-card">
    <h2 style="margin-bottom: 0.5rem;">Event Access Ticket</h2>
    <div class="status">● RUNNING</div>
    <p>Your application has been successfully deployed to Amazon ECS Fargate.</p>
    <div class="badge">Docker + Amazon ECR + ECS</div>
    <p class="meta">Project 2 — Week 5 Day 2 (Assessment 18)<br>BME Development Team</p>
  </div>
</body>
</html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', service: 'bme-ticketing-app' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`BME Ticketing Application listening on port ${PORT}`);
});

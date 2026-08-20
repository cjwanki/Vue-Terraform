const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue — Video Streaming</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      background: linear-gradient(160deg, #0a0a0f 0%, #12121a 40%, #1a0a2e 100%);
      color: #e8e8e8;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      overflow-x: hidden;
    }
    .logo {
      font-size: 3.2rem;
      font-weight: 800;
      letter-spacing: -1px;
      background: linear-gradient(90deg, #ff2d55, #ff6b35, #ff9f1c);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.25rem;
    }
    .tagline {
      color: #9ca3af;
      font-size: 1.1rem;
      margin-bottom: 2.5rem;
      letter-spacing: 0.5px;
    }
    .card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 2.5rem 3rem;
      backdrop-filter: blur(16px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
      text-align: center;
      max-width: 480px;
      width: 100%;
    }
    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(16, 185, 129, 0.15);
      color: #34d399;
      font-weight: 600;
      padding: 0.4rem 1.1rem;
      border-radius: 999px;
      font-size: 0.9rem;
      margin: 1.25rem 0;
      border: 1px solid rgba(16, 185, 129, 0.25);
    }
    .status-dot {
      width: 8px;
      height: 8px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 8px #34d399;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    .desc {
      color: #d1d5db;
      line-height: 1.55;
      margin-bottom: 1.5rem;
    }
    .tech-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1.25rem;
    }
    .tech-badge {
      background: rgba(99, 102, 241, 0.15);
      color: #a5b4fc;
      padding: 0.3rem 0.85rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid rgba(99, 102, 241, 0.25);
    }
    .footer {
      margin-top: 2rem;
      font-size: 0.8rem;
      color: #6b7280;
    }
    .play-icon {
      font-size: 2.8rem;
      margin-bottom: 0.75rem;
      filter: drop-shadow(0 0 12px rgba(255, 45, 85, 0.4));
    }
  </style>
</head>
<body>
  <div class="logo">VUE</div>
  <p class="tagline">Video Streaming Platform</p>

  <div class="card">
    <div class="play-icon">▶</div>
    <h2 style="font-size: 1.4rem; margin-bottom: 0.25rem;">Service Online</h2>
    <div class="status-pill">
      <span class="status-dot"></span>
      RUNNING on ECS Fargate
    </div>
    <p class="desc">
      Vue streaming application successfully containerized,<br>
      pushed to Amazon ECR, and deployed to Fargate.
    </p>
    <div class="tech-row">
      <span class="tech-badge">Docker</span>
      <span class="tech-badge">Amazon ECR</span>
      <span class="tech-badge">ECS Fargate</span>
      <span class="tech-badge">Node.js</span>
    </div>
  </div>

  <p class="footer">
    Project 3 — Production ECS + ALB<br>
    Vue Video Streaming • Cloud Engineering
  </p>
</body>
</html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'vue-streaming-app',
    client: 'Vue Video Streaming',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Vue Streaming App listening on port ${PORT}`);
});

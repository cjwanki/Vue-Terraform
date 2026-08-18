# Vue Video Streaming App

Containerized demo application for the **Vue** video streaming client.

Built for **Project 2 — Docker Build, Push & Deploy to Amazon ECS Fargate** (Week 5 Day 2 / Assessment 18).

## What this is
A lightweight Node.js web service that serves a branded Vue streaming landing page. It is designed to be:
- Built into a Docker image
- Pushed to Amazon ECR
- Deployed as an ECS Fargate service

## Local Build & Test

```bash
cd app

# Build
docker build -t vue-app:latest .

# Run
docker run -d -p 8080:80 --name vue-streaming vue-app:latest

# Open browser → http://localhost:8080
# Health check → http://localhost:8080/health
```

## Image Tagging for ECR (example)

```bash
docker tag vue-app:latest <ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/vue-app:latest
```

## Notes
- Listens on port 80 (matches common ECS task definitions)
- Includes `/health` endpoint for load balancer / ECS health checks
- Runs as non-root user inside the container

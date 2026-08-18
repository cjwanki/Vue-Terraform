# BME Ticketing Application

Simple containerized web application for **Project 2 — Docker Build, Push & Deploy to Amazon ECS** (Week 5 Day 2 / Assessment 18).

## Client Brief
> BME's development team wants to containerize the ticketing application. Build a Docker image, push it to Amazon ECR, and deploy it to Amazon ECS Fargate.

## Quick Start (Local)

```bash
cd app

# Build
docker build -t bme-app:latest .

# Run locally
docker run -d -p 8080:80 --name bme-ticketing bme-app:latest

# Open browser → http://localhost:8080
```

## Full Deployment Steps
See the root of this repository or the Assessment guide for the complete ECR + ECS Fargate workflow.

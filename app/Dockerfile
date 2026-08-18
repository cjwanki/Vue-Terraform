# BME Ticketing Application - Dockerfile
# Project 2: Docker Build, Push & Deploy to Amazon ECS Fargate

FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies first (better layer caching)
COPY package.json ./
RUN npm install --production --silent && npm cache clean --force

# Copy application source
COPY server.js .

# Expose the port the app runs on
EXPOSE 80

# Health check (optional but useful for ECS)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost:80/health || exit 1

# Run as non-root user for security
USER node

# Start the application
CMD ["node", "server.js"]

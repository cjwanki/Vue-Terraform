# Vue Video Streaming Application
# Project 2: Docker Build, Push & Deploy to Amazon ECS Fargate
# Client: Vue (video streaming service)

FROM node:18-alpine

WORKDIR /usr/src/app

# Install production dependencies first for better layer caching
COPY package.json ./
RUN npm install --production --silent && npm cache clean --force

# Copy application source
COPY server.js .

EXPOSE 80

# Health check used by ECS
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost:80/health || exit 1

# Run as non-root
USER node

CMD ["node", "server.js"]

# Express Docker App

A modern Express.js application built with TypeScript, featuring a complete CI/CD pipeline using both **Jenkins** and **GitHub Actions**, with Docker containerization support.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Docker](#docker)
- [CI/CD Pipeline](#cicd-pipeline)
- [Testing](#testing)
- [Environment Variables](#environment-variables)

## 🎯 Overview

This project demonstrates a production-ready Express.js application with:
- TypeScript for type safety
- Docker multi-stage builds for optimized images
- Comprehensive CI/CD pipelines (Jenkins & GitHub Actions)
- Automated testing with Jest
- n8n webhook notifications for pipeline status

## ✨ Features

- **Express.js 5.x** - Latest Express framework
- **TypeScript** - Full type safety and modern JavaScript features
- **Docker** - Multi-stage build for development and production
- **Jest** - Unit testing with supertest for API testing
- **CI/CD** - Dual pipeline support (Jenkins + GitHub Actions)
- **Rollback Support** - Easy rollback to previous versions
- **n8n Integration** - Automated notifications via webhooks

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Runtime | Node.js 22 |
| Framework | Express.js 5.x |
| Language | TypeScript 5.x |
| Testing | Jest + Supertest |
| Containerization | Docker |
| CI/CD | Jenkins / GitHub Actions |
| Notifications | n8n Webhooks |

## 📁 Project Structure

```
express-docker-app/
├── .github/
│   └── workflows/
│       └── main.yml          # GitHub Actions workflow
├── src/
│   └── app.ts                # Main application file
├── tests/
│   └── app.test.ts           # Test files
├── dist/                     # Compiled JavaScript (generated)
├── docker-compose.dev.yml    # Docker Compose for development
├── Dockerfile                # Multi-stage Docker build
├── Jenkinsfile               # Jenkins pipeline (multi-branch)
├── Jenkinsfile_single_pipeline # Jenkins single pipeline
├── jest.config.js            # Jest configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x or later
- npm or yarn
- Docker (optional, for containerized development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kritchanaxt/express-docker-app-multibranch.git
   cd express-docker-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
   ```bash
   npm run start:ts
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run start:ts` | Run app directly with ts-node (development) |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run compiled app from `dist/` folder |
| `npm test` | Run Jest tests |

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/api/hello` | Hello API response |
| GET | `/api/health` | Health check endpoint |
| GET | `/api/users` | List of sample users |
| GET | `/api/products` | List of sample products |
| GET | `/api/orders` | List of sample orders |

### Example Responses

**GET /**
```json
{
  "message": "Hello Express + TypeScript! 777"
}
```

**GET /api/health**
```json
{
  "status": "UP"
}
```

**GET /api/users**
```json
[
  { "id": 1, "name": "John Doe" },
  { "id": 2, "name": "Jane Doe" }
]
```

## 🐳 Docker

### Build and Run with Docker

```bash
# Build production image
docker build -t express-docker-app .

# Run container
docker run -d -p 3000:3000 --name express-app express-docker-app
```

### Development with Docker Compose

```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up

# Access the app at http://localhost:3002
```

### Multi-Stage Build

The Dockerfile uses multi-stage builds:

1. **Builder Stage** - Installs all dependencies and compiles TypeScript
2. **Production Stage** - Contains only production dependencies and compiled code

```dockerfile
# Builder stage (for development/testing)
FROM node:22-alpine AS builder

# Production stage (optimized for deployment)
FROM node:22-alpine AS production
```

## 🔄 CI/CD Pipeline

### GitHub Actions

The workflow (`.github/workflows/main.yml`) triggers on:
- Push to `develop` or `main` branches
- Pull requests to `develop` or `main` branches
- Manual workflow dispatch with action selection

**Jobs:**
1. **Build & Test** - Install dependencies and run tests
2. **Build & Push Docker** - Build and push image to Docker Hub
3. **Deploy to DEV** - Deploy to development environment (develop branch)
4. **Approval for Production** - Manual approval gate
5. **Deploy to PROD** - Deploy to production environment (main branch)
6. **Rollback** - Rollback to a specific image tag
7. **Notify on Failure** - Send failure notifications

### Jenkins Pipeline

The Jenkinsfile supports:
- Multi-branch pipeline
- Build & Deploy or Rollback actions
- Docker image building and pushing
- Notification to n8n webhooks

**Parameters:**
- `ACTION` - Choose between 'Build & Deploy' or 'Rollback'
- `ROLLBACK_TAG` - Image tag for rollback
- `ROLLBACK_TARGET` - Target environment (dev/prod)

## 🧪 Testing

Tests are written using Jest and Supertest for API testing.

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage
```

### Test Configuration

Jest is configured in `jest.config.js`:
- Uses `ts-jest` preset for TypeScript support
- Test files: `**/*.test.ts` or `**/*.spec.ts`
- Coverage collected from `src/**/*.ts`

## 🔐 Environment Variables

### GitHub Actions Secrets

| Secret | Description |
|--------|-------------|
| `DOCKERHUB_USERNAME` | Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token |
| `N8N_WEBHOOK_URL` | n8n webhook URL for notifications |

### Jenkins Credentials

| Credential ID | Type | Description |
|---------------|------|-------------|
| `dockerhub-cred` | Username/Password | Docker Hub credentials |
| `n8n-webhook` | Secret Text | n8n webhook URL |

## 📊 Pipeline Environments

| Environment | Port | Branch | Description |
|-------------|------|--------|-------------|
| Development | 3001 | develop | DEV environment |
| Production | 3000 | main | PROD environment |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

---

**Built with ❤️ for DevOps CI/CD Workshop**

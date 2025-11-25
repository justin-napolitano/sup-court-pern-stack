---
slug: github-sup-court-pern-stack
id: github-sup-court-pern-stack
title: PERN Stack Backend Application with GraphQL and Apollo
repo: justin-napolitano/sup-court-pern-stack
githubUrl: https://github.com/justin-napolitano/sup-court-pern-stack
generatedAt: '2025-11-24T21:36:29.475Z'
source: github-auto
summary: >-
  Explore a backend application built with the PERN stack, featuring GraphQL API management and user
  authentication.
tags:
  - postgresql
  - express
  - react
  - node.js
  - graphql
  - sequelize
  - jwt
  - dataloader
  - winston
seoPrimaryKeyword: pern stack backend application
seoSecondaryKeywords:
  - graphql api management
  - user authentication jwt
  - sequelize postgresql
  - real-time updates graphql
  - environment-based configuration
  - docker containerization
  - ci cd pipeline
seoOptimized: true
topicFamily: devtools
topicFamilyConfidence: 0.8
kind: project
entryLayout: project
showInProjects: true
showInNotes: false
showInWriting: false
showInLogs: false
---

A backend application built using the PERN stack (PostgreSQL, Express, React, Node.js) enhanced with GraphQL and Apollo Server for API management. This project serves as a foundation for building a React client to interact with a knowledge graph backend.

---

## Features

- User authentication and authorization with JWT tokens
- GraphQL API powered by Apollo Server
- Sequelize ORM for PostgreSQL database interactions
- Real-time updates with GraphQL subscriptions
- DataLoader integration for optimized batch loading
- Logging with Winston and request logging with Morgan
- Environment-based configuration for development, testing, and production

---

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Sequelize
- GraphQL
- Apollo Server
- JWT (jsonwebtoken)
- DataLoader
- bcrypt (password hashing)
- Winston (logging)
- Mocha & Chai (testing)

---

## Getting Started

### Prerequisites

- Node.js (v10.11.0 or higher)
- PostgreSQL
- npm or yarn

### Installation

```bash
git clone https://github.com/justin-napolitano/sup-court-pern-stack.git
cd sup-court-pern-stack
npm install
```

### Environment Setup

Create a `.env` file in the project root with the following variables:

```env
DATABASE_URL=postgres://username:password@localhost:5432/supreme_court
SECRET=your_jwt_secret_key
PORT=8000
NODE_ENV=development
```

### Running the Application

```bash
npm start
```

The server will start on `http://localhost:8000/graphql` with GraphQL Playground enabled.

### Running Tests

```bash
npm run test:execute-test
```

---

## Project Structure

```
├── LICENSE
├── README.md
├── package.json
├── package-lock.json
├── src
│   ├── config
│   │   ├── db.js           # Database configuration
│   │   ├── index.js        # Environment config
│   │   └── logger.js       # Winston logger setup
│   ├── loaders
│   │   └── user.js         # DataLoader batch functions
│   ├── models
│   │   ├── index.js        # Sequelize initialization
│   │   ├── user.js         # User model
│   │   └── message.js      # Message model
│   ├── resolvers
│   │   ├── index.js        # Combined resolvers
│   │   ├── user.js         # User resolvers
│   │   ├── message.js      # Message resolvers
│   │   └── authorization.js# Authorization middleware
│   ├── schema
│   │   ├── index.js        # Schema aggregation
│   │   ├── user.js         # User GraphQL schema
│   │   └── message.js      # Message GraphQL schema
│   ├── subscription
│   │   ├── index.js        # PubSub setup
│   │   └── message.js      # Subscription events
│   ├── tests
│   │   ├── api.js          # API test utilities
│   │   └── user.spec.js    # User tests
│   ├── utils
│   │   └── auth.js         # JWT token helpers
│   ├── index.js            # Entry point
│   ├── server.js           # Express and Apollo server setup
│   └── first_start.js      # (Possibly legacy or initial server start)
```

---

## Future Work / Roadmap

- Add frontend React client to consume the GraphQL API
- Expand test coverage and add integration tests
- Implement role-based access control with more granular permissions
- Add support for pagination and filtering on more queries
- Enhance subscription support for real-time features
- Improve error handling and validation
- Containerize the application with Docker for easier deployment
- Add CI/CD pipeline for automated testing and deployment

---

*Note: This project currently focuses on backend setup and API development. Frontend integration and deployment strategies are planned for future iterations.*



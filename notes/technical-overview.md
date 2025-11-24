---
slug: github-sup-court-pern-stack-note-technical-overview
id: github-sup-court-pern-stack-note-technical-overview
title: sup-court-pern-stack
repo: justin-napolitano/sup-court-pern-stack
githubUrl: https://github.com/justin-napolitano/sup-court-pern-stack
generatedAt: '2025-11-24T18:47:11.832Z'
source: github-auto
summary: >-
  This repo is a backend application built on the PERN stack (PostgreSQL,
  Express, React, Node.js) with GraphQL and Apollo Server. It lays the
  groundwork for a React client connecting to a knowledge graph backend.
tags: []
seoPrimaryKeyword: ''
seoSecondaryKeywords: []
seoOptimized: false
topicFamily: null
topicFamilyConfidence: null
kind: note
entryLayout: note
showInProjects: false
showInNotes: true
showInWriting: false
showInLogs: false
---

This repo is a backend application built on the PERN stack (PostgreSQL, Express, React, Node.js) with GraphQL and Apollo Server. It lays the groundwork for a React client connecting to a knowledge graph backend.

### Key Features
- User authentication with JWT
- GraphQL API via Apollo Server
- Sequelize ORM for database interactions
- Real-time updates with GraphQL subscriptions
- Environment configuration for various environments

### Getting Started
1. Clone the repo:
    ```bash
    git clone https://github.com/justin-napolitano/sup-court-pern-stack.git
    cd sup-court-pern-stack
    npm install
    ```
   
2. Set up your `.env` file:
    ```env
    DATABASE_URL=postgres://username:password@localhost:5432/supreme_court
    SECRET=your_jwt_secret_key
    PORT=8000
    NODE_ENV=development
    ```

3. Start the application:
    ```bash
    npm start
    ```

The server runs at `http://localhost:8000/graphql`. Note: Error handling and testing setups are in progress; focus is on backend API right now.

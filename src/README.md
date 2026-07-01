# Cortex Platform - Node.js Backend

## Overview

This is the backend API for Cortex Platform, built with Node.js, Express, and PostgreSQL.

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 13+
- Redis 6+

### Setup

```bash
npm install
cp .env.example .env
nano .env
npm run migrate
npm run dev
```

## Available Scripts

```bash
npm run dev          # Start with hot reload
npm test             # Run all tests
npm run lint         # Run ESLint
npm run lint:fix     # Fix issues
npm run format       # Format code
npm run migrate      # Run migrations
npm run build        # Build for production
npm start            # Start production server
```

## Project Structure

```
src/
├── api/              # API routes
├── config/           # Configuration
├── controllers/      # Request handlers
├── middleware/       # Custom middleware
├── models/           # Database models
├── services/         # Business logic
├── utils/            # Utilities & helpers
└── index.js          # Entry point

tests/
├── unit/             # Unit tests
├── integration/      # Integration tests
└── fixtures/         # Test data
```

## API Documentation

API docs available at: `http://localhost:3000/api-docs`

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md)

## License

MIT - See [LICENSE](../LICENSE)

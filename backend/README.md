# Backend

## Building images

- Frontend:

```bash
  cd frontend/
  docker build -t bnf/frontend:0.1 .
```

- Backend:

```bash
  cd backend
  docker build -t bnf/backend:0.1 .
```

## Local start-up

1. Setup all environment variables:

   Backend

   - `PORT`

   Frontend

   - `GRAPHQL_API_HOST`
   - `GRAPHQL_API_PORT`

   Main database

   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
   - `DB_HOST`
   - `DB_PORT`

You can use `.env` and place it in `backend` directory

2. Starting for development:

```bash
cd backend
docker-compose -f docker-compose.local.yml up -d
yarn start:dev

```

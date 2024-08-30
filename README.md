1. Clone the repository:
   ```bash
   git clone https://github.com/elite-dev-star/nuxt-directus-test.git
   cd nuxt-directus-test
   ```

2. Setup your environment variables:
   Copy the `.env.example` to a new file named `.env` and update the variables as needed.
   ```bash
   cp .env.example .env
   ```

## Deployment

1. Build and run the Docker containers:
   
   ```bash
   docker-compose up --build -d
   ```
2. Apply Snapshots

   ```bash
   docker cp ./snapshot.yml directus:/directus/snapshots
   ```

   ```bash
   docker exec -it directus npx directus schema apply ./snapshots/snapshot.yml
   ```

   ```bash
   docker restart directus
   ```

3. Access the application:
   - 🚀 Nuxt App: `http://localhost:3000`
   - 🐰 Directus Admin: `http://localhost:8055`

4. Admin Credentail
    - Email: `john@gmail.com`
    - Password: `abcABC123!@#`

## Environment Variables Reference Table

| Variable                                       | Description                                                   |
|------------------------------------------------|---------------------------------------------------------------|
| `POSTGRES_USER`                                | PostgreSQL username                                           |
| `POSTGRES_PASSWORD`                            | PostgreSQL password                                           |
| `POSTGRES_DB`                                  | PostgreSQL database name                                      |
| `DIRECTUS_URL`                                 | Directus URL                                                  |
| `DIRECTUS_KEY`                                 | Directus Key                                                  |
| `DIRECTUS_SECRET`                              | Directus Secret                                               |
| `ADMIN_EMAIL`                                  | Admin email for Directus                                      |
| `ADMIN_PASSWORD`                               | Admin password for Directus                                   |
| `PUBLIC_URL`                                   | Public URL for Directus                                       |
| `CONTENT_SECURITY_POLICY_DIRECTIVES__FRAME_ANCESTORS` | Content Security Policy Directives for frame ancestors |
| `API_URL`                                      | API URL for Nuxt                                              |
| `NUXT_PUBLIC_DIRECTUS_URL`                     | Public Directus URL for Nuxt                                  |
| `NUXT_PUBLIC_API_BASE`                         | Public API base URL for Nuxt                                  |

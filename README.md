# tcit-test
Node Version: 16.13.0

Para la db:
- Crear un .env con la siguiente estructura:
  ```
  DATABASE_URL="postgresql://user:password@localhost:port/db-name?schema=schema-name"
  ```
- Para la migración:
    ```
    npx prisma migrate dev --name init
    ```

Para iniciar la app, en una terminal:
```
cd .\tcit-app 
npm start
```

Para iniciar la API en otra terminal:
```
cd .\backend 
npm run dev
```
Falta ver el tema de la estructura
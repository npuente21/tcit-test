# tcit-test
Node Version: 16.13.0

Para la db:


Para iniciar la API:
```
npm i
```
Luego, para migrar la db:
- Crear un .env con la siguiente estructura:
  ```
  DATABASE_URL="postgresql://user:password@localhost:port/db-name?schema=schema-name"
  ```
- Para la migración:
    ```
    npx prisma migrate dev --name init
    ```
Por último:
```
cd .\backend 
npm run dev
```

Para iniciar la app, en otra terminal:
```
npm i
cd .\tcit-app 
npm start
```

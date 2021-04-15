# Personal Site

Welcome to the repo for my personal site. I made this public so that anybody who is curious can check out how I like to structure my code.

## Scripts

---
### Starting (Development)

```npm run start:dev``` 

Runs the server in dev mode and serves the static files through webpack-hot-middleware. Uses nodemon to support server hot-reloading.

### Starting (Production)

```npm run start```

Starts the app in prod mode. Requires the client and server code to be build first.

### Build the server

```npm run build:server```

Compiles the server code into js `dist` folder

### Build the client

```npm run build:client```

Compiles the contents of the `client` folder into minified js and css static files that will be sent to the browser.

###Generate types

```npm run generate```

Generates types from the GraphQL schema.

###Lint

```npm run lint```

Fixes lint errors
<p align="center" >
  <a href="https://kita.js.org" target="_blank" rel="noopener noreferrer">
    <img src="https://kita.js.org/logo.png" width="180" alt="Kita JS logo" />
  </a>
</p>

<br />

<h1 align=center>KitaJs Minimal Example</h1>

<br />

## Setup

```sh
# clone the repo
git clone https://github.com/kitajs/minimal-example.git app

# Cd into it
cd app

# Install dependencies
npm install

# Build the app
npm run build

# Start the app
npm start
```

<br />

## Documentation

You can find the documentation at [kita.js.org](https://kita.js.org). This is a minimal example without any boilerplate or custom configuration, the best way to bootstrap your app without
boilerplate that you don't need.

<br />

## Getting started

Firstly, let's review everything you need to know to get started with KitaJs.

1. Make sure your IDE is using the typescript project version, for VSCode, you can check that by opening the command palette and typing `Typescript: Select Typescript Version` and selecting `Use Workspace Version`. This will add useful debugging information to your IDE. You can test it by writing `export function post(a: 1) {}` into `src/routes/index.ts` and you should see an error in your IDE.

2. You can start your server by running `npm run build` and `npm start`.

3. To add more routes, just create a new file under `src/routes`, the file name will be the route path, for example `src/routes/users.ts` will be `/users`. After, export a function with one of the following names: `get`, `port`, `put`, `delete` or `all`. By simply adding parameters to the newly created method, kitajs automatically generates the route validation, swagger schema, and types.

4. You must encapsulate your parameter with one of kita's generic methods, `Body`, `BodyProp`, `Query`, `Path`, `Header` and much others that you can find in the documentation. You can also use `FastifyInstance`, `FastifyRequest` and `FastifyReply` to access the Fastify instance, request and reply objects. You can hover over each type to see its documentation and usage examples.

<br />

## Boilerplate

1. In your tsconfig, we added `"plugins": [{ "name": "@kitajs/ts-plugin" }]` to enable your editor to help you with intellisense.

2. We only need `@kitajs/runtime` and `fastify` production dependencies, you can see the only "configuration" file at [src/index.ts](src/index.ts). `@fastify/swagger` and `@fastify/swagger-ui` are only used to generate documentation at `http://localhost:1227/docs`

3. The `build` script calls `kita build` before `tsc`, which is the right order because we need to read type information from the source files.

4. You can run the `test` script to check if your code compiles correctly. `--dry-run` and `--noEmit` prevents kita and typescript to emit files, which is useful for testing.

5. Start your server by running `node dist/index.js` or `npm start`.

6. Done! 🎉

<br />

## Swagger

After starting your server, you can access [`http://localhost:1227/documentation`](http://localhost:1227/documentation).

![swagger webpage](https://github.com/kitajs/minimal-example/assets/47537704/534a7d42-a901-40e0-a0c5-a78bf197b9f9)

<br />

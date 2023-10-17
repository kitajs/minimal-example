<div align=right>
  <a href='https://codespaces.new/kitajs/minimal-example?quickstart=1'>
    <img src='https://github.com/codespaces/badge.svg' alt='Open in GitHub Codespaces' style='max-width: 100%;'>
  </a>
</div>

<br />
<br />

<p align="center">
  <a href="https://kita.js.org" target="_blank" rel="noopener noreferrer">
    <img src="https://kita.js.org/logo.png" width="180" alt="Kita JS logo" />
  </a>
</p>

<br />

<h1 align="center">KitaJS Minimal Example</h1>

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

You can find the documentation at [kita.js.org](https://kita.js.org). This is a minimal example without any boilerplate or custom configuration, making it the best way to bootstrap your app without unnecessary setup.

<br />

## Getting Started

Firstly, let's review everything you need to know to get started with KitaJS.

1. Make sure your IDE is using the TypeScript project version. For VSCode, you can check that by opening the command palette and typing `TypeScript: Select TypeScript Version` and selecting `Use Workspace Version`. This will add useful debugging information to your IDE. You can test it by writing `export function post(a: 1) {}` into `src/routes/index.ts`, and you should see an error in your IDE.

2. You can start your server by running `npm run build` and `npm start`.

3. To add more routes, simply create a new file under `src/routes`. The file name will be the route path; for example, `src/routes/users.ts` will be `/users`. Afterward, export a function with one of the following names: `get`, `post`, `put`, `delete`, or `all`. By adding parameters to the newly created method, KitaJS automatically generates route validation, a Swagger schema, and types.

4. You must encapsulate your parameters with one of Kita's generic methods: `Body`, `BodyProp`, `Query`, `Path`, `Header`, and many others that you can find in the documentation. You can also use `FastifyInstance`, `FastifyRequest`, and `FastifyReply` to access the Fastify instance, request, and reply objects. You can hover over each type to see its documentation and usage examples.

<br />

## Boilerplate

1. In your tsconfig, we added `"plugins": [{ "name": "@kitajs/ts-plugin" }]` to enable your editor to help you with IntelliSense.

2. We only need `@kitajs/runtime` and `fastify` as production dependencies. You can see the only "configuration" file at [src/index.ts](src/index.ts). `@fastify/swagger` and `@fastify/swagger-ui` are only used to generate documentation at `http://localhost:1227/docs`.

3. The `build` script calls `kita build` before `tsc`, which is the correct order because we need to read type information from the source files.

4. You can run the `test` script to check if your code compiles correctly. `--dry-run` and `--noEmit` prevent KitaJS and TypeScript from emitting files, which is useful for testing.

5. Start your server by running `node dist/index.js` or `npm start`.

6. Done! 🎉

<br />

## Swagger

After starting your server, you can access [`http://localhost:1227/documentation`](http://localhost:1227/documentation).

![Swagger webpage](https://github.com/kitajs/minimal-example/assets/47537704/534a7d42-a901-40e0-a0c5-a78bf197b9f9)

<br />

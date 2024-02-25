// This tells kita where to find the root of your project
globalThis.KITA_PROJECT_ROOT = __dirname;

import fastify from 'fastify';
import { Kita } from '@kitajs/runtime';
import { ajvFilePlugin } from '@fastify/multipart';

const app = fastify({
  logger: {
    // Simple pino logger with pretty print
    transport: { target: 'pino-pretty', options: {} }
  },
  ajv: { plugins: [ajvFilePlugin] }
});

// Registers the generated kita plugin
app.register(Kita);

// Starts your server and prints out the port
app
  .listen({ port: 1227, host: '0.0.0.0' })
  .then(() => console.log('http://localhost:1227/documentation'));

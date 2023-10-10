import { Kita } from '@kitajs/runtime';
import fastify from 'fastify';

const app = fastify();

app.register(Kita);

app.listen({ port: 3000 }).then(console.log);

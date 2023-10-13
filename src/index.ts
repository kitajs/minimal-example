import fastify from "fastify";
import { Kita } from "@kitajs/runtime";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

const app = fastify();

// Simply register fastify's swagger support
app.register(fastifySwagger);
app.register(fastifySwaggerUi);

// This registers the generated kita plugin
app.register(Kita);

// Starts your server and prints out the port
app
  .listen({ port: 1227 })
  .then(() => console.log("http://localhost:1227/documentation"));

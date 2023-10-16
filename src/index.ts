import fastify from "fastify";
import { Kita } from "@kitajs/runtime";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifySensible from "@fastify/sensible";

const app = fastify();

// Register fastify sensible to allow error handling
app.register(fastifySensible, {
  sharedSchemaId: "HttpError",
});

// Registers fastify's swagger support
app.register(fastifySwagger);
app.register(fastifySwaggerUi);

// Registers the generated kita plugin
app.register(Kita);

// Starts your server and prints out the port
app
  .listen({ port: 1227 })
  .then(() => console.log("http://localhost:1227/documentation"));

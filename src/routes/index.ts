import type { FastifyReply, FastifyRequest } from 'fastify';

export function get(request: FastifyRequest, reply: FastifyReply) {
  return {
    method: `Request method is ${request.method}`,
    status: `Reply status is ${reply.statusCode}`
  };
}
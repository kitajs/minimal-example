import { HttpErrors } from "@fastify/sensible";

/**
 * @tag Error
 * @operationId getError
 * @summary Randomly fails with a 400 error
 */
export async function get(errors: HttpErrors) {
  if (Math.random() > 0.5) {
    throw errors.badRequest("Randomly failed");
  }

  return true;
}

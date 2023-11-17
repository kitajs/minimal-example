import { File, SavedFile } from '@kitajs/runtime';
import { FastifyReply } from 'fastify';

/**
 * @tag File
 * @operationId returnInMemoryFile
 */
export async function post(file: File, reply: FastifyReply) {
  reply.type(file.mimetype);
  return (await file.toBuffer()).toString();
}

/**
 * @tag File
 * @operationId saveFileIntoDisk
 */
export async function put(file: SavedFile) {
  return file.filepath;
}

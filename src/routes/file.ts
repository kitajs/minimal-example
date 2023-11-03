import { File, SavedFile } from '@kitajs/runtime';

/**
 * @operationId returnInMemoryFile
 */
export async function post(file: File) {
  return (await file.toBuffer()).toString();
}

/**
 * @operationId saveFileIntoDisk
 */
export async function put(file: SavedFile) {
  return file.filepath;
}

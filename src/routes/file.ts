import { File, SavedFile } from '@kitajs/runtime';

/**
 * @tag File
 * @operationId returnInMemoryFile
 */
export async function post(file: File) {
  return (await file.toBuffer()).toString();
}

/**
 * @tag File
 * @operationId saveFileIntoDisk
 */
export async function put(file: SavedFile) {
  return file.filepath;
}

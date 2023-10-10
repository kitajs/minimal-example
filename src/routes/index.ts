import { Query } from '@kitajs/runtime';

export function get(name: Query = 'World') {
  return { name };
}

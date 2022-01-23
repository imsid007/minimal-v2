import { camelCase, isArray, transform, isObject, snakeCase } from 'lodash';

export const camelize = (obj: Record<string, unknown>) =>
  transform(obj, (result: Record<string, unknown>, value: unknown, key: string, target) => {
    const camelKey = isArray(target) ? key : camelCase(key);
    result[camelKey] = isObject(value) ? camelize(value as Record<string, unknown>) : value;
  });


  export const snakize = (obj: Record<string, unknown>) =>
  transform(obj, (result: Record<string, unknown>, value: unknown, key: string, target) => {
    const camelKey = isArray(target) ? key : snakeCase(key);
    result[camelKey] = isObject(value) ? snakize(value as Record<string, unknown>) : value;
  });

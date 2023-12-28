type FilterDefinedProperties<T extends Record<string, any>> = {
  [K in keyof T as T[K] extends undefined ? never : K]: T[K];
};

export function filterDefinedProperties<T extends Record<string, any>>(
  obj: T,
): FilterDefinedProperties<T> {
  if (!obj) return {} as FilterDefinedProperties<T>;
  const filteredObj: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined) {
      filteredObj[key] = obj[key] as T;
    }
  }
  return filteredObj as FilterDefinedProperties<T>;
}

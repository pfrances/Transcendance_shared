export function filterDefinedProperties(obj: Record<string, any>) {
  if (!obj) return {};
  const filteredObj: Record<string, any> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
}

/**
 * string replace to camelcase
 * @param str
 * @returns string
 */
export const toCamelCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

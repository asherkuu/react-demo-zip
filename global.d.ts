declare global {
  interface String {
    toPascalCase: () => string;
    toCamelCase: () => string;
    toPascalWithDash: () => string;
  }
}

// @ts-ignore
String.prototype.toPascalCase = function (): string {
  const words = this.match(/[a-z]+/gi);
  return words
    ? words
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        })
        .join("")
    : "";
};

// @ts-ignore
String.prototype.toPascalWithDash = function (): string {
  const words = this.match(/[a-z]+/gi);
  return words
    ? words
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        })
        .join("-")
    : "";
};

// @ts-ignore
String.prototype.toCamelCase = function (): string {
  const words = this;
  return words
    ? words
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    : "";
};

export {};

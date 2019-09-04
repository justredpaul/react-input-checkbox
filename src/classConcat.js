export const classConcat = classes => {
  let type = typeof classes;
  if (type === "string" || type === "number") return classes || "";

  if (Array.isArray(classes) && classes.length > 0) {
    return classes.reduce((concated, className) => {
      return className ? concated.concat(`${className} `) : concated;
    }, "");
  } else {
    return Object.keys(classes).reduce((concated, className) => {
      return classes[className] ? concated.concat(`${className} `) : concated;
    }, "");
  }
};

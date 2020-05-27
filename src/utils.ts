export function getProperty(object: Object | null): Array<string> {
  if (!object) return [];
  const prototypeProps = Object.getOwnPropertyNames(Object.getPrototypeOf(object));
  const ownProps = Object.getOwnPropertyNames(object);
  const allProps = [...prototypeProps, ...ownProps].filter((name: string) => !name.startsWith("_")).sort();
  return allProps;
}

export function getFuncAndArguments(line: string) {
  const funcName = line.split("(")[0];
  const argumentsRegex = /(?<=\()(.+?)(?=\))/g;
  const separator = /\,\s*/g;
  const parameters = (line.match(argumentsRegex) || [""])[0].trim().split(separator);
  return { funcName, parameters };
}

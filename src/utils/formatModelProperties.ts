/* eslint-disable @typescript-eslint/no-explicit-any */

export const formatModelProperties = (
  objProperties: any = {},
  options = {
    snakeCase: true
  }
): any => {
  let formattedProperties = {};
  const { snakeCase } = options;
  // issue with strings that start with capital letters;
  let regExString: RegExp;
  let stringReplace: any;

  if (snakeCase) {
    regExString = new RegExp(/([A-Z])/g);
    stringReplace = (letter: string) => {
      return `_${letter.toLowerCase()}`
    }
  } else {
    regExString = new RegExp(/([-_][a-z])/ig);
    stringReplace = ($1: any) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    };
  }

  // eslint-disable-next-line no-loops/no-loops
  for (const key in objProperties) {
    let propKey: any = key;
    if (regExString.test(propKey)) {
      propKey = propKey.replace(
        regExString,
        stringReplace
      )
    }
    formattedProperties = {
      ...formattedProperties,
      [propKey]: objProperties[key]
    }
  }


  return formattedProperties;
}

console.log(formatModelProperties(
  { birth_date: 'hi', mid_name: 'hoe' },
  {
   snakeCase: false
  }))


console.log(formatModelProperties(
  { firstName: 'hi', lastName: 'hoe' },
  {
    snakeCase: true
  }))
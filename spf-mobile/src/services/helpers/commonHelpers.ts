export function camelCaseToName(camelCaseString: string): string {
    let nameString = camelCaseString.charAt(0).toUpperCase();
  
    for (let i = 1; i < camelCaseString.length; i++) {
      if (camelCaseString[i] === camelCaseString[i].toUpperCase()) {
        nameString += ' ' + camelCaseString[i];
      } else {
        nameString += camelCaseString[i];
      }
    }
  
    return nameString;
  }
  
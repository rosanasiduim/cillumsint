type Person = {
  name: string;
  // Add other relevant properties for a Person here
};

const greetPerson = (personObj: Person): string => {
  // Check if the person object has a name property
  if (!personObj.name) {
    throw new Error('No name provided');
  }
  
  // Return a personalized greeting
  return `Hello, ${personObj.name}!`;
};

function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

// Solution 1: Iterate through the array
user.forEach(name => {
  console.log(greeter(name));
});

// Solution 2: Join the array elements into a single string
console.log(greeter(user.join(', ')));
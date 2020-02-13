// Normal function declaration
function CreateCusotmerId(name: string, id: number): string {
    return `${name} - ${id}`;
}

// Function declaraction with same type
let IdGenerator: (str: string, num: number) => string;

// Assign function to function variable
IdGenerator = CreateCusotmerId;

// Call declared fucntion
let myId = IdGenerator('Danial', 10);
console.log(myId);

// Reassign with lambda / arrow function implementaion
IdGenerator = (name: string, id: number) => `${id} - ${name}`;
myId = IdGenerator('Danial', 15);
console.log(myId);








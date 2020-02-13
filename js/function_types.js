// Normal function declaration
function CreateCusotmerId(name, id) {
    return name + " - " + id;
}
// Function declaraction with same type
var IdGenerator;
// Assign function to function variable
IdGenerator = CreateCusotmerId;
// Call declared fucntion
var myId = IdGenerator('Danial', 10);
console.log(myId);
// Reassign with lambda / arrow function implementaion
IdGenerator = function (name, id) { return id + " - " + name; };
myId = IdGenerator('Danial', 15);
console.log(myId);
//# sourceMappingURL=function_types.js.map
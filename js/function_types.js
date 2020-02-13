function CreateCusotmerId(name, id) {
    return name + " - " + id;
}
var IdGenerator;
IdGenerator = CreateCusotmerId;
var myId = IdGenerator('Danial', 10);
console.log(myId);
IdGenerator = function (name, id) { return id + " - " + name; };
myId = IdGenerator('Danial', 15);
console.log(myId);
//# sourceMappingURL=function_types.js.map
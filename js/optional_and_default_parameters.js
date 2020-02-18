"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
/**
 * js all parameters are options
 * ts all parameters are mandatory by default
 * optional parameters with ?
 * optional parameters should come after madatory parameters
 * optianal params are undefined if not assigned
 * assign default value for optional parameter in function declaration
 */
// Function with optional parameters
function CreateCustomer(name, age, city) {
    console.log('Cusotmer created with following details');
    console.log("name: " + name);
    if (age) {
        console.log("age: " + age);
    }
    if (city) {
        console.log("city: " + city);
    }
}
CreateCustomer('Daniel');
CreateCustomer('Daniel', 23);
CreateCustomer('Daniel', 23, 'Chicago');
function GetAllBooks() {
    var books = [
        { title: 'TypeScript For Bieginners', author: 'Kannan', type: enums_1.BookType.Biography, available: true },
        { title: 'Learn Micro Services', author: 'Scott', type: enums_1.BookType.Fiction, available: false },
        { title: 'AWS Advanced', author: 'James', type: enums_1.BookType.Scifi, available: true },
        { title: 'Spring Boot', author: 'Kousik', type: enums_1.BookType.Biography, available: false }
    ];
    return books;
}
// Function with default valued parameter
function LogBooks(msg, books) {
    if (books === void 0) { books = GetAllBooks(); }
    console.log(msg);
    books.forEach(function (book) {
        console.log(book.title);
    });
}
LogBooks('All books list');
var bioBooks = GetAllBooks().filter(function (book) { return book.type === enums_1.BookType.Biography; });
LogBooks('Bio Books', bioBooks);
//# sourceMappingURL=optional_and_default_parameters.js.map
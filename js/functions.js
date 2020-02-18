"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
function GetAllBooks() {
    var books = [
        { id: 1, title: 'TypeScript For Bieginners', author: 'Kannan', type: enums_1.BookType.Biography, available: true },
        { id: 2, title: 'Learn Micro Services', author: 'Scott', type: enums_1.BookType.Fiction, available: false },
        { id: 3, title: 'AWS Advanced', author: 'James', type: enums_1.BookType.Biography, available: true }
    ];
    return books;
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    //Arrow function or lambda function
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
var bioBook = GetBookById(enums_1.BookType.Biography);
var allBooks = GetAllBooks();
//Arrow function or lambda function
allBooks.forEach(function (val, idx, arr) { return console.log(++idx + " - " + val.title); });
//# sourceMappingURL=functions.js.map
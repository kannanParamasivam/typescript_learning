"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
function GetAllBooks() {
    var books = [
        { id: 1, title: 'TypeScript For Bieginners', author: 'Kannan', type: enums_1.BookType.Biography, available: true },
        { id: 2, title: 'Learn Micro Services', author: 'Scott', type: enums_1.BookType.Fiction, available: false },
        { id: 3, title: 'AWS Advanced', author: 'James', type: enums_1.BookType.Scifi, available: true },
        { id: 4, title: 'Spring Boot', author: 'Kousik', type: enums_1.BookType.Biography, available: false }
    ];
    return books;
}
function GetBookById(id) {
    var books = GetAllBooks().filter(function (book) { return book.id === id; });
    if (books && books.length > 0) {
        return books[0].title;
    }
    return '';
}
// Funciton with REST parameter
function CheckoutBooks(name) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log("Books checkedout by " + name);
    bookIds.forEach(function (bookId) { return console.log(GetBookById(bookId)); });
}
// Call function with values for REST parameter
CheckoutBooks('Great Student', 1, 4);
//# sourceMappingURL=rest_parameter.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
function GetAllBooks() {
    var books = [
        { title: 'TypeScript For Bieginners', author: 'Kannan', type: enums_1.BookType.Biography, available: true },
        { title: 'Learn Micro Services', author: 'Scott', type: enums_1.BookType.Fiction, available: false },
        { title: 'AWS Advanced', author: 'James', type: enums_1.BookType.Biography, available: true }
    ];
    return books;
}
function GetBookById(bookType) {
    console.log("Getting books in type: " + enums_1.BookType[bookType]);
    var books = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        if (book.type === bookType) {
            filteredTitles.push(book.title);
        }
    }
    return filteredTitles;
}
function LogBooks(bookTitles) {
    bookTitles.forEach(function (bookTitle) {
        console.log(bookTitle);
    });
}
var biographyBooks = GetBookById(enums_1.BookType.Biography);
LogBooks(biographyBooks);
//# sourceMappingURL=arrys_and_enums.js.map
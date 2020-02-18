"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
function GetAllBooks() {
    var books = [
        { id: 1, title: 'TypeScript For Bieginners', author: 'Kannan', bookType: enums_1.BookType.Biography, available: true },
        { id: 2, title: 'Learn Micro Services', author: 'Scott', bookType: enums_1.BookType.Fiction, available: false },
        { id: 3, title: 'AWS Advanced', author: 'James', bookType: enums_1.BookType.Scifi, available: true }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    var firstAvailableType = enums_1.BookType.Biography;
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        if (book.available) {
            firstAvailable = book.title;
            firstAvailableType = book.type;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
    console.log('First Available Type: ' + firstAvailableType);
}
var allBBooks = GetAllBooks();
allBBooks.push({ title: 'python', author: 'Marc', type: enums_1.BookType.Biography, available: true });
LogFirstAvailable(allBBooks);
//# sourceMappingURL=app.js.map
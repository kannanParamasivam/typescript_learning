"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
function PrintBook(book) {
    console.log(book.title + " - " + book.author);
}
// Duck Type Definition
var duckTypedBook = {
    id: 1,
    title: 'Duck type book',
    author: 'Kannan',
    bookType: enums_1.BookType.Biography,
    available: true,
    price: 100,
    pages: 150
};
PrintBook(duckTypedBook);
// Implementing function interface
var markAsDamaged;
markAsDamaged = function (reason) { return console.log("" + reason); };
var typedBook = {
    id: 2,
    title: 'Typed book',
    author: 'Scott',
    bookType: enums_1.BookType.Biography,
    available: false,
    condition: 'Damaged',
    MarkAsDamaged: markAsDamaged
};
typedBook.MarkAsDamaged('Back cover missing');
PrintBook(typedBook);
//# sourceMappingURL=interfaces.js.map
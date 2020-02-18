var BookType;
(function (BookType) {
    BookType[BookType["Scifi"] = 0] = "Scifi";
    BookType[BookType["Biography"] = 1] = "Biography";
    BookType[BookType["Fiction"] = 2] = "Fiction";
})(BookType || (BookType = {}));
function GetAllBooks() {
    var books = [
        { id: 1, title: 'TypeScript For Bieginners', author: 'Kannan', type: BookType.Biography, available: true },
        { id: 2, title: 'Learn Micro Services', author: 'Scott', type: BookType.Fiction, available: false },
        { id: 3, title: 'AWS Advanced', author: 'James', type: BookType.Biography, available: true }
    ];
    return books;
}
// Define implemenation with abstract parameter type and implementation
function GetTitles(bookProperty) {
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        GetAllBooks().forEach(function (book) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        });
    }
    if (typeof bookProperty === 'boolean') {
        GetAllBooks().forEach(function (book) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        });
    }
    return foundTitles;
}
// Invoke overloaded functions
console.log(GetTitles('Kannan'));
console.log(GetTitles(false));
//# sourceMappingURL=function_overloads.js.map
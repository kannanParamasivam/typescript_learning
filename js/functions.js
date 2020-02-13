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
function GetBookById(id) {
    var allBooks = GetAllBooks();
    //Arrow function or lambda function
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
var bioBook = GetBookById(BookType.Biography);
var allBooks = GetAllBooks();
//Arrow function or lambda function
allBooks.forEach(function (val, idx, arr) { return console.log(++idx + " - " + val.title); });
//# sourceMappingURL=functions.js.map
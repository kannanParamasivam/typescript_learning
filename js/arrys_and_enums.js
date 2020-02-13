var BookType;
(function (BookType) {
    BookType[BookType["Scifi"] = 0] = "Scifi";
    BookType[BookType["Biography"] = 1] = "Biography";
    BookType[BookType["Fiction"] = 2] = "Fiction";
})(BookType || (BookType = {}));
function GetAllBooks() {
    var books = [
        { title: 'TypeScript For Bieginners', author: 'Kannan', type: BookType.Biography, available: true },
        { title: 'Learn Micro Services', author: 'Scott', type: BookType.Fiction, available: false },
        { title: 'AWS Advanced', author: 'James', type: BookType.Biography, available: true }
    ];
    return books;
}
function GetBookById(bookType) {
    console.log("Getting books in type: " + BookType[bookType]);
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
var biographyBooks = GetBookById(BookType.Biography);
LogBooks(biographyBooks);
//# sourceMappingURL=arrys_and_enums.js.map
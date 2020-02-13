
enum BookType { Scifi, Biography, Fiction }


function GetAllBooks() {
    let books = [
        { title: 'TypeScript For Bieginners', author: 'Kannan', type: BookType.Biography, available: true },
        { title: 'Learn Micro Services', author: 'Scott', type: BookType.Fiction, available: false },
        { title: 'AWS Advanced', author: 'James', type: BookType.Biography, available: true }
    ];

    return books;
}


function GetBookById(bookType: BookType): Array<string> {

    console.log(`Getting books in type: ${BookType[bookType]}`);

    let books = GetAllBooks();
    let filteredTitles: string[] = [];

    for (let book of books) {

        if (book.type === bookType) {
            filteredTitles.push(book.title);
        }

    }

    return filteredTitles;
}


function LogBooks(bookTitles: string[]): void {

    bookTitles.forEach(bookTitle => {
        console.log(bookTitle);
    });

}

let biographyBooks: string[] = GetBookById(BookType.Biography)
LogBooks(biographyBooks);

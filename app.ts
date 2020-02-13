enum BookType { Scifi, Biography, Fiction }


function GetAllBooks() {
    let books = [
        { title: 'TypeScript For Bieginners', author: 'Kannan', type: BookType.Biography, available: true },
        { title: 'Learn Micro Services', author: 'Scott', type: BookType.Fiction, available: false },
        { title: 'AWS Advanced', author: 'James', type: BookType.Scifi, available: true }
    ];

    return books;
}


function LogFirstAvailable(books: any): void {

    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';
    let firstAvailableType: BookType = BookType.Biography;

    for (let book of books) {

        if (book.available) {
            firstAvailable = book.title;
            firstAvailableType = book.type;
            break
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
    console.log('First Available Type: ' + firstAvailableType);

}


const allBBooks = GetAllBooks();
allBBooks.push({ title: 'python', author: 'Marc', type: BookType.Biography, available: true })
LogFirstAvailable(allBBooks)
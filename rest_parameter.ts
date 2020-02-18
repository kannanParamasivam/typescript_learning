import { BookType } from './enums';


function GetAllBooks() {
    let books = [
        { id: 1, title: 'TypeScript For Bieginners', author: 'Kannan', type: BookType.Biography, available: true },
        { id: 2, title: 'Learn Micro Services', author: 'Scott', type: BookType.Fiction, available: false },
        { id: 3, title: 'AWS Advanced', author: 'James', type: BookType.Scifi, available: true },
        { id: 4, title: 'Spring Boot', author: 'Kousik', type: BookType.Biography, available: false }
    ];

    return books;
}

function GetBookById(id: number): string {
    let books = GetAllBooks().filter(book => book.id === id)

    if (books && books.length > 0) {
        return books[0].title;
    }

    return '';
}


// Funciton with REST parameter
function CheckoutBooks(name: string, ...bookIds: number[]): void {
    console.log(`Books checkedout by ${name}`);
    bookIds.forEach(bookId => console.log(GetBookById(bookId)));
}

// Call function with values for REST parameter
CheckoutBooks('Great Student', 1, 4)
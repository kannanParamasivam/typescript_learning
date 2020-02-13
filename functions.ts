
enum BookType { Scifi, Biography, Fiction }


function GetAllBooks() {
    let books = [
        { id: 1, title: 'TypeScript For Bieginners', author: 'Kannan', type: BookType.Biography, available: true },
        { id: 2, title: 'Learn Micro Services', author: 'Scott', type: BookType.Fiction, available: false },
        { id: 3, title: 'AWS Advanced', author: 'James', type: BookType.Biography, available: true }
    ];

    return books;
}


function GetBookById(id: number) {
    const allBooks = GetAllBooks();

    //Arrow function or lambda function
    return allBooks.filter(book => book.id === id)[0];
}


const bioBook = GetBookById(BookType.Biography);

const allBooks = GetAllBooks();

//Arrow function or lambda function
allBooks.forEach((val, idx, arr) => console.log(`${++idx} - ${val.title}`));



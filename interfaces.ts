import { BookType } from './enums';

// Interface
interface Book
{
    id: number,
    title: string,
    author: string,
    bookType: BookType,
    available: boolean,

    condition?: string, // Optional memeber

    MarkAsDamaged?: DamageLogger // optional function type declaration

}

// Interface for funtion type
interface DamageLogger {
    (reason: string): void
}

export { Book, DamageLogger };


function PrintBook(book: Book)
{
    console.log(`${book.title} - ${book.author}`);
}


// Duck Type Definition
let duckTypedBook = {
    id: 1,
    title: 'Duck type book',
    author: 'Kannan',
    bookType: BookType.Biography,
    available: true,
    price: 100,
    pages: 150
}

PrintBook(duckTypedBook);

// Implementing function interface
let markAsDamaged: DamageLogger;
markAsDamaged = (reason:string) => console.log(`${reason}`);

let typedBook: Book = {
    id: 2,
    title: 'Typed book',
    author: 'Scott',
    bookType: BookType.Biography,
    available: false,
    condition: 'Damaged',
    MarkAsDamaged: markAsDamaged
}

typedBook.MarkAsDamaged('Back cover missing');
PrintBook(typedBook)
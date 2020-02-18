import { BookType } from './enums';
import { Book } from './interfaces';

function GetAllBooks()
{
    let books: Book[] = [
        { id: 1, title: 'TypeScript For Bieginners', author: 'Kannan', bookType: BookType.Biography, available: true },
        { id: 2, title: 'Learn Micro Services', author: 'Scott', bookType: BookType.Fiction, available: false },
        { id: 3, title: 'AWS Advanced', author: 'James', bookType: BookType.Scifi, available: true }
    ];

    return books;
}


function LogFirstAvailable(books: any): void
{

    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';
    let firstAvailableType: BookType = BookType.Biography;

    for (let book of books)
    {

        if (book.available)
        {
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
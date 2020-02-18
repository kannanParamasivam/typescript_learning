import { BookType } from './enums';
import { Book } from './interfaces'


function GetAllBooks()
{
    let books:Book[] = [
        { id: 1, title: 'TypeScript For Bieginners', author: 'Kannan', bookType: BookType.Biography, available: true },
        { id: 2, title: 'Learn Micro Services', author: 'Scott', bookType: BookType.Fiction, available: false },
        { id: 3, title: 'AWS Advanced', author: 'James', bookType: BookType.Biography, available: true }
    ];

    return books;
}

//Following function has two overloads
// Function overload
// Declare the targeted signatures
function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
// Define implemenation with abstract parameter type and implementation
function GetTitles(bookProperty: any): string[]
{
    let foundTitles: string[] = []

    if (typeof bookProperty == 'string')
    {
        GetAllBooks().forEach(book =>
        {

            if (book.author === bookProperty)
            {
                foundTitles.push(book.title);
            }

        });
    }

    if (typeof bookProperty === 'boolean')
    {

        GetAllBooks().forEach(book =>
        {

            if (book.available === bookProperty)
            {
                foundTitles.push(book.title);
            }

        })

    }

    return foundTitles;
}


// Invoke overloaded functions
console.log(GetTitles('Kannan'))
console.log(GetTitles(false))
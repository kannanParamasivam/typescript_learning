import { BookType } from './enums';

/**
 * js all parameters are options
 * ts all parameters are mandatory by default
 * optional parameters with ?
 * optional parameters should come after madatory parameters
 * optianal params are undefined if not assigned
 * assign default value for optional parameter in function declaration
 */

// Function with optional parameters
function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('Cusotmer created with following details');

    console.log(`name: ${name}`);

    if (age) {
        console.log(`age: ${age}`);
    }

    if (city) {
        console.log(`city: ${city}`);
    }
}

CreateCustomer('Daniel');
CreateCustomer('Daniel', 23)
CreateCustomer('Daniel', 23, 'Chicago')


function GetAllBooks() {
    let books = [
        { title: 'TypeScript For Bieginners', author: 'Kannan', type: BookType.Biography, available: true },
        { title: 'Learn Micro Services', author: 'Scott', type: BookType.Fiction, available: false },
        { title: 'AWS Advanced', author: 'James', type: BookType.Scifi, available: true },
        { title: 'Spring Boot', author: 'Kousik', type: BookType.Biography, available: false }
    ];

    return books;
}

// Function with default valued parameter
function LogBooks(msg: string, books: any[] = GetAllBooks()): void {
    console.log(msg);

    books.forEach(book => {
        console.log(book.title);
    });
}


LogBooks('All books list');

const bioBooks = GetAllBooks().filter(book => book.type === BookType.Biography)

LogBooks('Bio Books', bioBooks);
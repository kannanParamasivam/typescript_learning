interface Person
{
    name: string
}

interface User {
    email: string
}

// Extending Interfaces
interface Author extends Person, User {
    city: string
}

// Implementing extended interfaces
let author: Author = {
    name: 'Kannan',
    email: 'kannan.paramasivam@live.com',
    city: 'Chicago'
 }
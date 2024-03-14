export interface Blog {
    title: string;
    description: string;
    author: Author;
    publishDate: string;
}

interface Author {
    firstName: string;
    lastName: string;
}
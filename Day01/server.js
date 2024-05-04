// const { log } = require('console')
// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write(`<h1>Hello world</h1>`)
//         res.statusCode = 200
//         res.end()
//     }
//     else {
//         res.write(`<h1>server not found</h1>`)
//         res.statusCode = 200
//         res.end()
//     }
// })
// server.listen(8000, () => {
//     console.log(`server is running on port 8000`);
// })


const express = require('express');

const app = express();
const books = [
    { id: 1, name: "JavaScript: The Good Parts", price: 25.99 },
    { id: 2, name: "Eloquent JavaScript", price: 29.99 },
    { id: 3, name: "You Don't Know JS: Scope & Closures", price: 22.50 },
    { id: 4, name: "JavaScript: The Definitive Guide", price: 35.00 },
    { id: 5, name: "Learning React: A Hands-On Guide to Building Web Applications Using React and Redux", price: 40.00 },
    { id: 6, name: "Node.js Design Patterns", price: 33.50 },
    { id: 7, name: "Pro Express.js: Master Express.js: The Node.js Framework For Your Web Development", price: 37.99 },
    { id: 8, name: "React Native: Building Mobile Apps with JavaScript", price: 30.00 },
    { id: 9, name: "Learning GraphQL: Declarative Data Fetching for Modern Web Apps", price: 27.50 },
    { id: 10, name: "MongoDB: The Definitive Guide", price: 45.00 },
    { id: 11, name: "Clean Code: A Handbook of Agile Software Craftsmanship", price: 32.99 },
    { id: 12, name: "Design Patterns: Elements of Reusable Object-Oriented Software", price: 39.50 },
    { id: 13, name: "Head First Design Patterns: A Brain-Friendly Guide", price: 34.00 },
    { id: 14, name: "Cracking the Coding Interview: 189 Programming Questions and Solutions", price: 29.99 },
    { id: 15, name: "The Pragmatic Programmer: Your Journey to Mastery", price: 28.50 },
    { id: 16, name: "Programming Pearls", price: 26.00 },
    { id: 17, name: "Code Complete: A Practical Handbook of Software Construction", price: 36.99 },
    { id: 18, name: "The Mythical Man-Month: Essays on Software Engineering", price: 31.00 },
    { id: 19, name: "Refactoring: Improving the Design of Existing Code", price: 33.50 },
    { id: 20, name: "Domain-Driven Design: Tackling Complexity in the Heart of Software", price: 38.00 }
];


app.get('/', (req, res) => {
    res.send(`<h1>Hello </h1>`)
})

app.get('/books', (req, res) => {
    // if(req.query.sh)
    console.log(req.query);
    if (req.query.show === `all`) {
        return res.json(books)
    }

    if (req.query.price == `30`) {
        return res.json(books.filter((book) => book.price <= 30.00))
    }


    const result = books.filter((book) => book.price > 30.00)
    res.json(result)

})

app.listen(8000, () => {
    console.log(`server is running on port 8000`);
})
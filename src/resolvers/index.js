const books = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        year: 2000
    },
    {
        title: "Jurassic Park",
        author: "Michael Crichton",
        year: 2000
    }
];
const resolvers = {
    Query: {
        books: () => books
    }
};

module.exports = resolvers;

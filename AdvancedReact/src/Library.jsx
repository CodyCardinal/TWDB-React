import { useState } from "react"
import "./Library.css";

export default function Library() {
    const library = [
        {
            id: 1,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genres: ["Fiction", "Classic"],
            available: true,
            ratings: [5, 4, 5]
        },
        {
            id: 2,
            title: "1984",
            author: "George Orwell",
            genres: ["Fiction", "Dystopian"],
            available: false,
            ratings: [5, 5, 4, 4]
        },
        {
            id: 3,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genres: ["Fiction", "Classic"],
            available: true,
            ratings: [4, 4, 5, 3]
        }
    ];

    const [books, setBooks] = useState(library);

    // Add a new book with id: 4, title: "Brave New World", author: "Aldous Huxley", genres: ["Fiction", "Dystopian"], available: true, and ratings: [5, 4, 4].
    const addABook = () => {
        setBooks((oldBooks) => [...oldBooks, { id: 4, title: "Brave New World", author: "Aldous Huxley", genres: ["Fiction", "Dystopian"], available: true, ratings: [5, 4, 4] }]);
    }

    // Remove the book with id: 2.
    const removeABook = () => {
        setBooks((oldBooks) => oldBooks.filter((book) => book.id !== 2));
    }

    // Update the title of all books to be in uppercase.
    const updateAllBooks = () => {
        setBooks((oldBooks) => oldBooks.map((book) => {
            return {
                ...book,
                title: book.title.toUpperCase()
            };
        }));
    }

    // Change the available status of the book with id: 3 to false and add a new rating of 5 to its ratings array.
    const updateABook = () => {
        setBooks((oldBooks) => oldBooks.map((book) => {
            if (book.id == 3) {
                return {
                    ...book,
                    available: false,
                    ratings: [...book.ratings, 5]
                };
            } else {
                return book;
            }
        }));
    }

    return (
        <>
            <h2>Library</h2>
            <div className="library-books">
                <div className="row book-columns">
                    <div><h5>ID</h5></div>
                    <div><h5>Title</h5></div>
                    <div><h5>Author</h5></div>
                    <div><h5>Availability</h5></div>
                    <div><h5>Genres</h5></div>
                    <div><h5>Ratings</h5></div>
                </div>
                {books.map((book) => (
                    <div className="row" key={book.id}>
                        <div>{book.id}</div>
                        <div>{book.title}</div>
                        <div>{book.author}</div>
                        <div>{book.available ? "Available" : "Not Available"}</div>
                        <div>{book.genres.join(", ")}</div>
                        <div>{book.ratings.join(",")}</div>
                    </div>
                ))}
                <div className="button-group">
                    <button onClick={addABook}>Add a Book</button>
                    <button onClick={removeABook}>Remove a Book</button>
                    <button onClick={updateAllBooks}>Update all Books</button>
                    <button onClick={updateABook}>Update a Book</button>
                </div>
            </div>
        </>
    );
}
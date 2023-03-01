import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { BooksPage } from "./BooksPage";
import React from "react";

export const YourShelf  =()  => {
	const [books, setBooks] = useState<BookModel[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	useEffect(() => {
		const fetchBooks = async () => {
			//for test
			const id: number = 2;
			const baseUrl: string = `http://localhost:8080/api/${id}/allbooks`;
			const response = await fetch(baseUrl);
			if (!response.ok) {
				throw new Error("Somthing went wrong!");
			}
			const responseJson = await response.json();

			const responseData = responseJson;

			const loadedBooks: BookModel[] = [];
         
			for (const key in responseData) {
				loadedBooks.push({
					id: responseData[key].id,
					title: responseData[key].title,
					author: responseData[key].author,
				});
			}
			setBooks(loadedBooks);
			setIsLoading(false);


            
		};
		fetchBooks().catch((error: any) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<div className="container m-5">
				<p>Loading...</p>
			</div>
		);}
	
	if (httpError) {
		return (
			<div className="container m-5">
				<p>{httpError}</p>
			</div>
		);

    }
    return(
        <div>
            {books.map((book) => (
        <BooksPage book={book} key={book.id} />
    ))};
        </div>
    );



    
    // books.map((book)=>
    // <BooksPage book={book} key={book.id}
    // ));


   
};

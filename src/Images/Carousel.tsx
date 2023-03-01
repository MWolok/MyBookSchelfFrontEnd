import React from "react";

import { useEffect, useState } from "react";
import BookModel from "../models/BookModel";

export const Carousel = () => {
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
			//test
			console.log(responseJson);
			console.log(responseJson[0].title);
			console.log(books);
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
			// if(loadedBooks.length = 0){
			//     return(
			//         <div className="container m-5">
			//             <p>Empty Shelf</p>
			//         </div>
			//     )
			// }



			
		};
		fetchBooks().catch((error: any) => {
			setIsLoading(false);
			setHttpError(error.message);
		}
		
		);
		console.log(books);
	}, []);
	if (isLoading) {
		return (
			<div className="container m-5">
				<p>Loading...</p>
			</div>
		);
	}
	if (httpError) {
		return (
			<div className="container m-5">
				<p>{httpError}</p>
			</div>
		);
	}

	return (
		<div className="container mt-5" style={{ height: 550 }}>
			<div className="homepage-carousel-title text-center">
				<h3>What you add next?</h3>
			</div>
			<div
				id="carouselExampleControls"
				className="carousel carousel-dark slide mt-5 
                d-none d-lg-block"
				data-bs-interval="false"
			>
				{/* Desktop */}
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="row d-flex justify-content-center align-items-center">
							{/* refactor need
							{books.slice(0, 1).map((book) => (
								<BookHolder book={book} key={book.id} />
							))} */}
						</div>
					</div>
					<div className="carousel-item">
						<div className="row d-flex justify-content-center align-items-center">
							{/* {books.slice(0, 1).map((book) => (
								<BookHolder book={book} key={book.id} />
							))} */}
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<div className="row d-flex justify-content-center align-items-center">
						{/* {books.slice(0, 1).map((book) => (
							<BookHolder book={book} key={book.id} />
						))} */}
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			{/* Mobile */}
			<div className="d-lg-none mt-3">
				<div className="row d-flex justify-content-center align-items-center">
					{/* <BookHolder book={books[0]} key={books[0].id} /> */}
				</div>
			</div>
			<div className="homepage-carousel-title mt-3"></div>
		</div>
	);
};

import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import React from "react";


//@ts-ignore
export const BooksPage: React.FC<{ book: BookModel }> = (props) => {
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
		};
		fetchBooks().catch((error: any) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	return (
		<div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
			<div className="row g-0">
				<div className="col-md-2">
					<div className="d-none d-lg-block">
						<img
							src="http://clipart-library.com/images/6Tpo6G8TE.jpg"
							width="123"
							height="196"
							alt="Book"
						/>
					</div>
					<div
						className="d-lg-none d-flex justify-content-center 
                   align-items-center"
					>
						<img
							src="http://clipart-library.com/images/6Tpo6G8TE.jpg"
							width="123"
							height="196"
							alt="Book"
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="card-body">
						<h5 className="card-title">{props.book.author}</h5>
						<h4>{props.book.title}</h4>
						<p className="card-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
							suscipit, tenetur minima error, assumenda ratione quae quos velit
							laborum veniam at. Minus accusamus dolores quo maxime maiores
							deserunt ut repudiandae!
						</p>
					</div>
				</div>
				{/* <div className='col-md-4 d-flex justify-content-center align-items-center'>
               <Link className='btn btn-md main-color text-white' to={`/checkout/${props.book.id}`}>
                   View Details
               </Link>
           </div> */}
			</div>
		</div>
	);
};

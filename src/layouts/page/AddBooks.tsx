import { useState } from "react";
import React from "react";
import AddBookModel from "../../models/AddBookModel";

export const AddBooks = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");

	const [displayWaring, setDisplayWaring] = useState(false);
	const [displaySucces, setDisplaySucess] = useState(false);

	async function submitNewBook() {
		let id: number = 2;
		const url: string = `http://localhost:8080/api/${id}/books`;
		if (title !== "" && author !== "") {
			const book: AddBookModel = new AddBookModel(title, author);
			const requestOp = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(book),
			};

			const submitNewBookResposne = await fetch(url, requestOp);
			if (!submitNewBookResposne.ok) {
				throw new Error("Somthing went wrong");

			}
            setTitle('');
            setAuthor('');
            setDisplayWaring(false);
            setDisplaySucess(true);
		}else{
            setDisplayWaring(true);
            setDisplaySucess(false);
        }
	}

	return (
		<div className="container mt-5 mb-5">
			{displaySucces && (
				<div className="alert alert-success" role="alert">
					Book added successfully
				</div>
			)}
			{displayWaring && (
				<div className="alert alert-danger" role="alert">
					All fields must be filed out
				</div>
			)}
			<div className="card">
				<div className="card-header">Add new book</div>
				<div className="card-body">
					<form method="POST">
						<div className="row">
							<div className="col-md-6 mb-3">
								<label className="form-label">Title</label>
								<input
									type="text"
									className="form-control"
									name="title"
									required
									onChange={(e) => setTitle(e.target.value)}
									value={title}
								/>
							</div>
							<div className="col-md-3 mb-3">
								<label className="form-label">Author</label>
								<input
									type="text"
									className="form-control"
									name="author"
									required
									onChange={(e) => setAuthor(e.target.value)}
									value={author}
								/>
							</div>
						</div>
						<div>
							<button type="button" className="btn btn-primary mt-3" onClick={submitNewBook}>
								Add Book
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

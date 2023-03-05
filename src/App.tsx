import React from "react";

import "./App.css";
import BookModel from "./models/BookModel";
import { Footer } from "./layouts/Footer";
import { HomePage } from "./layouts/page/HomePage";
import { Navbar } from "./layouts/page/Navbar";
import { BooksPage } from "./layouts/page/BooksPage";
import { YourShelf } from "./layouts/page/YourShelf";
import { Redirect, Route, Switch } from "react-router-dom";
import { Heros } from "./layouts/page/Heros";
import { Register } from "./layouts/page/Register";
import { AddBooks } from "./layouts/page/AddBooks";
import { Signup } from "./layouts/page/Signup";

function App() {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Route path="/log">
				<Navbar />
				<HomePage />
				<Heros />
			</Route>

			<div className="flex-grow-1">
				<Switch>
					<Route path="/" exact>
						<Navbar />
						<HomePage />
						<Heros />
					</Route>
					<Route path="/myshelf">
						<Navbar />
						<YourShelf />
					</Route>
					<Route path="/addbook">
						<Navbar />
						<AddBooks />
					</Route>
					<Route path="/register">
						<Navbar/>
						<Register />
					</Route>
					<Route path="/login">
						<Navbar />
						<Signup />
					</Route>
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;

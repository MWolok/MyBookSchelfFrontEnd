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

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<HomePage />
					<Heros />
				</Route>
				<Route path="/myshelf">
					<YourShelf />
				</Route>
				<Route path="/addbook">
					<AddBooks />
				</Route>
				<Route path="/register">
					<Register/>
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;

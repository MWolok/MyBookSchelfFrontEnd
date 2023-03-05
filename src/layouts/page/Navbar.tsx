import React, { useEffect, useState } from "react";

export const Navbar = () => {
	const [UserLogedIn, setUserLogedIn] = useState(false);

	useEffect(() => {
		const currentId = localStorage.getItem("currentId");
		if (currentId !== "" && currentId !== null) {
			setUserLogedIn(true);
		}
	}, []);
	const logOutCurrent = () => {
		setUserLogedIn(false);
		localStorage.setItem("currentId", "");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
			<div className="container-fluid">
				<span className="navbar-brand">My-BookShelf</span>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle Navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="/">
								Home
							</a>
						</li>

						{UserLogedIn && (
							<li className="nav-item">
								<a className="nav-link" href="/myshelf">
									MyBooks
								</a>
							</li>
						)}
						{UserLogedIn && (
							<li className="nav-item">
								<a className="nav-link" href="/addbook">
									AddBook
								</a>
							</li>
						)}
					</ul>
					<ul className="navbar-nav ms-auto">
						{!UserLogedIn && (
							<li className="nav-item m-1">
								<a
									type="button"
									className="btn btn-outline-light"
									href="/login"
								>
									Sign in
								</a>
							</li>
						)}
						{UserLogedIn && (
							<li className="nav-item m-1">
								<a
									onClick={logOutCurrent}
									type="button"
									className="btn btn-outline-light"
									href="/"
								>
									Log out
								</a>
							</li>
						)}

						{!UserLogedIn && (
							<li className="nav-item m-1">
								<a
									type="button"
									className="btn btn-outline-light"
									href="/register"
								>
									Register
								</a>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

import { useState } from "react";
import React from "react";
import SignUpmodel from "../../models/SignUpmodel";

import { useHistory } from "react-router-dom";

export const Signup = () => {
	const [usernameOrEmail, setUsernameOrEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [currentUserId, setCurrentUSerId] = 
	// useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const history = useHistory();
	

	const [displayWaring, setDisplayWaring] = useState(false);

	async function Signup() {
		const url: string = "http://localhost:8080/api/login";

		if (usernameOrEmail !== "" && password !== "") {
			const logInModel: SignUpmodel = new SignUpmodel(
				usernameOrEmail,
				password
			);

			const requestOp = {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(logInModel),
			};

			// console.log(requestOp);
			const log = await fetch(url, requestOp);
			if (!log.ok) {
				setDisplayWaring(true);
			} else{
			// console.log(localStorage.getItem('currentId'));

			//catch user id and pass to another comp tdo
			const responseJson: string = await log.json();
			localStorage.setItem("currentId", JSON.stringify(responseJson));
			
	console.log(localStorage.getItem('currentId'));
		
			setUsernameOrEmail("");
			setPassword("");
			history.push("/log");
		}}
	}
	return (
		<div className="Container w-100 d-flex justify-content-center align-items-center">
			<div className="Col-md-8 lg-6 xs-12">
				<div className="Card px-4">
					<div className="card-body">
						<div className="mb-3 mt-md-4">
							<h2 className="fw-bold mb-2 text-center text-uppercase ">
								MyBookShelf
							</h2>
							<div className="mb-3">
								<form method="POST">
									<div className="form-Group mb-3" id="Name">
										<label className="form-label text-center">Name</label>
										<input
											className="form-control"
											type="text"
											required
											placeholder="UserNameOrEmail"
											onChange={(a) => setUsernameOrEmail(a.target.value)}
											value={usernameOrEmail}
										/>
									</div>

									<div className="form-group mb-3" id="formBasicEmail">
										<label className="form text-center">User Name</label>
										<input
											className="form-control"
											type="password"
											placeholder="password"
											required
											onChange={(a) => setPassword(a.target.value)}
											value={password}
										/>
									</div>
									<div className="d-grid">
										<button className="primary" type="button" onClick={Signup}>
											Logi In
										</button>
										{displayWaring && (
											<div className="alert alert-danger" role="alert">
												User not exist
											</div>
										)}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

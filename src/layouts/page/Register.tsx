import { useRef, useState, useEffect } from "react";
import React from "react";
import RegisterUserModel from "../../models/RegisterUserMordel";
export const Register = () => {
	const [name, setName] = useState("");
	const [username, setusername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const [displayWaring, setDisplayWaring] = useState(false);
	const [displaySucces, setDisplaySucess] = useState(false);

	async function Register() {
		const url: string = "http://localhost:8080/api/register";
	
		if (name !== "" && username !== "" && email !== "" && password !== "") {
			const user: RegisterUserModel = new RegisterUserModel(
				name,
				password,
				username,
				email
			);
			const requestOp = {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				  },
				body: JSON.stringify(user),
			};
			
			const submitNewUser = await fetch("http://localhost:8080/api/register/adduser", requestOp);
			
			if (!submitNewUser.ok) {
				throw new Error("Somthing went wrong");
			}
			setName("");
			setPassword("");
			setusername("");
			setEmail("");
			setDisplayWaring(false);
			setDisplaySucess(true);
		} else {
			setDisplayWaring(true);
			setDisplaySucess(false);
		}
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
												placeholder="Enter Name"
												onChange={(a) => setName(a.target.value)}
												value={name}
											/>
										</div>

										<div className="form-group mb-3" id="formBasicEmail">
											<label className="form text-center">User Name</label>
											<input
												className="form-control"
												type="username"
												placeholder="username"
												required
												onChange={(a) => setusername(a.target.value)}
												value={username}
											/>
										</div>

										<div className="form-grup mb-3" id="formBasicPassword">
											<label className="form text-center">Email</label>
											<input
												className="form-control"
												type="email"
												required
												placeholder="email"
												onChange={(a) => setEmail(a.target.value)}
												value={email}
											/>
										</div>

										<div className="form-grup mb-3" id="formBasicPassword">
											<label className="form text-center">Password</label>
											<input
												className="form-control"
												type="password"
												required
												placeholder="Password"
												onChange={(a) => setPassword(a.target.value)}
												value={password}
											/>
										</div>
										<div className="d-grid">
											<button
												className="primary"
												type="button"
												onClick={Register}
											>
												Create Account
											</button>
										</div>
										{displaySucces && (
											<div className="alert alert-success" role="alert">
												Created successfully
											</div>
										)}
										{displayWaring && (
											<div className="alert alert-danger" role="alert">
												All fields must be filed out
											</div>
										)}
										<div className="mt-3">
											<p className="mb-0  text-center">
												Already have an account??{" "}
												<a href="{''}" className="text-primary fw-bold">
													Sign In
												</a>
											</p>
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

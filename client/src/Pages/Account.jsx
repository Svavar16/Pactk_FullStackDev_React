import React, { Component } from "react";
import Form from "../components/Form";
import TextInput from "../components/BaseInput/TextInput";
import { login } from "../api/Auth";
import { PrimaryButton } from "../components/Button";

class Account extends Component {
	state = {
		email: "",
		loading: false,
		done: false,
		error: undefined,
	};

	handleEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ loading: true });
		const { success, error } = await login(this.state.email);

		if (success) {
			this.setState({ done: true });
		} else {
			this.setState({ error });
		}
		this.setState({ loading: false });
	};

	render() {
		return (
			<div>
				<h1>login or register</h1>
				{this.state.done ? (
					<p>
						We sent a magic link to your email. Click on it to login
					</p>
				) : (
					<React.Fragment>
						<p>
							If you do not have an account, a new one will be
							setup for you automatically.
						</p>
						<Form onSubmit={this.handleSubmit}>
							<TextInput
								name="email"
								label="Email address"
								placeholder="e.g. anna.ryan@gmail.com"
								value={this.state.email}
								onChange={this.handleEmailChange}
							/>
							<PrimaryButton disabled={this.state.loading}>
								Login
							</PrimaryButton>
							{this.state.error && (
								<p style={{ color: "crimson" }}>
									{this.state.error}
								</p>
							)}
						</Form>
					</React.Fragment>
				)}
			</div>
		);
	}
}

export default Account;

import axios from 'axios';
import axiosError from 'axios-error';

class AuthService {
	constructor() {
		let service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/auth`,
			withCredentials: true,
		});
		this.service = service;
	}

	signup = (username, name, email, password) => {
		return this.service
			.post('/signup', { username, name, email, password })
			.then((response) => response)
			.catch((error) => error);
	};
	login = (username, password) => {
		return this.service
			.post('/login', { username, password })
			.then((response) => response.data)
			.catch((error) => error);
	};
	existusername = (username) => {
		return this.service
			.post('/existusername', { username })
			.then((response) => true)
			.catch((error) => false);
	};
	existemail = (email) => {
		return this.service
			.post('/existemail', { email })
			.then((response) => true)
			.catch((error) => false);
	};
	google = () => {
		return process.env.REACT_APP_API_URL + '/google';
	};
	logout = () => {
		return this.service
			.post('/logout', {})
			.then((response) => response.status === 200);
	};
	loggedin = () => {
		return this.service
			.post('/loggedin')
			.then((response) => response.status === 200)
			.catch((error) => error.status === 200);
	};
}
const authService = new AuthService();

export default authService;

import axios from 'axios';

export class ClubService {
	constructor() {
		let service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/clubs`,
			withCredentials: true,
		});
		this.service = service;
	}

	get = (id) => {
		return this.service.get(`/${id}`).then((response) => response.data);
	};

	list = () => {
		return this.service.get(`/`).then((response) => response.data);
	}
	create = (name, location, website, email) => {
		return this.service
			.post('/', { name, location, website, email })
			.then((response) => response.data);
	};
	save = (id, name, location, website, email) => {
		return this.service
			.put(`/${id}`, { name, location, website, email })
			.then((response) => response.data);
	};
	delete = (id) => {
		return this.service.delete(`/${id}`).then((response) => response.data);
	};
}
const clubService = new ClubService();

export default clubService;

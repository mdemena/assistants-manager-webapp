import axios from 'axios';

export class CategoryService {
	constructor() {
		let service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/categories`,
			withCredentials: true,
		});
		this.service = service;
	}

	get = (id) => {
		return this.service.get(`/${id}`).then((response) => response.data);
	};
	listByClub = (club) => {
		return this.service.get(`/club/${club}/`).then((response) => response.data);
	}
	save = (id, club, name) => {
		return this.service
			.put(`/${id}`, { club, name })
			.then((response) => response.data);
	};
	delete = (id) => {
		return this.service.delete(`/${id}`).then((response) => response.data);
	};
}
const categoryService = new CategoryService();

export default categoryService;

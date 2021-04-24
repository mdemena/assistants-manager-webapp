import axios from 'axios';

export class TeamService {
	constructor() {
		let service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/teams`,
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
	listByCategory = (category) => {
		return this.service.get(`/category/${category}/`).then((response) => response.data);
	}
	listBySeason = (season) => {
		return this.service.get(`/season/${season}/`).then((response) => response.data);
	}
	create = (club, name) => {
		return this.service
			.post(`/`, { club, name })
			.then((response) => response.data);
	};
	save = (id,club, name) => {
		return this.service
			.put(`/${id}`, { club, name })
			.then((response) => response.data);
	};
	delete = (id) => {
		return this.service.delete(`/${id}`).then((response) => response.data);
	};
}
const teamService = new TeamService();

export default teamService;

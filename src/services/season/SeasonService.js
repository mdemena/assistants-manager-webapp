import axios from 'axios';

export class SeasonService {
	constructor() {
		let service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/seasons`,
			withCredentials: true,
		});
		this.service = service;
	}

	get = (id) => {
		return this.service.get(`/${id}`).then((response) => response.data);
	};

	listByClub = (club) => {
		return this.service.get(`/club/${club}`).then((response) => response.data);
	}

	create = (club, name, initDate, endDate, enabled) => {
		return this.service
			.post('/', { club, name, initDate, endDate, enabled })
			.then((response) => response.data);
	};
	save = (id, club, name, initDate, endDate, enabled) => {
		return this.service
			.put(`/${id}`, { club, name, initDate, endDate, enabled })
			.then((response) => response.data);
	};
	delete = (id) => {
		return this.service.delete(`/${id}`).then((response) => response.data);
	};
}
const seasonService = new SeasonService();

export default seasonService;

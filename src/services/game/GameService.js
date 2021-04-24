import axios from 'axios';

export class GameService {
	constructor() {
		let service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/games`,
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
	create = (season, category, localTeam, visitTeam, setsLocalTeam, setsVisitTeam, sets, date, location, status) => {
		return this.service
			.post(`/`, { season, category, localTeam, visitTeam, setsLocalTeam, setsVisitTeam, sets, date, location, status })
			.then((response) => response.data);
	};
	save = (id, season, category, localTeam, visitTeam, setsLocalTeam, setsVisitTeam, sets, date, location, status) => {
		return this.service
			.put(`/${id}`, { season, category, localTeam, visitTeam, setsLocalTeam, setsVisitTeam, sets, date, location, status })
			.then((response) => response.data);
	};
	delete = (id) => {
		return this.service.delete(`/${id}`).then((response) => response.data);
	};
}
const gameService = new GameService();

export default gameService;

import axios from 'axios';

export class AssistantService {
	constructor() {
		let service = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/assistants`,
			withCredentials: true,
		});
		this.service = service;
	}

	get = (id) => {
		return this.service.get(`/${id}`).then((response) => response.data);
	};
	listByGame = (game) => {
		return this.service.get(`/game/${game}/`).then((response) => response.data);
	}
	listByGameTeam = (game, team) => {
		return this.service.get(`/gameTeam/${game}-${team}/`).then((response) => response.data);
	}
	create = (game, team, assistantName, assistantID, assistantEmail, assistantPhone, playerName) => {
		return this.service
			.post(`/`, { game, team, assistantName, assistantID, assistantEmail, assistantPhone, playerName })
			.then((response) => response.data);
	};
	save = (id, game, team, assistantName, assistantID, assistantEmail, assistantPhone, playerName) => {
		return this.service
			.put(`/${id}`, { game, team, assistantName, assistantID, assistantEmail, assistantPhone, playerName })
			.then((response) => response.data);
	};
	setState = (id, status) => {
		return this.service
			.put(`/state/${id}`, { status })
			.then((response) => response.data);
	};
	delete = (id) => {
		return this.service.delete(`/${id}`).then((response) => response.data);
	};
}
const assistantService = new AssistantService();

export default assistantService;

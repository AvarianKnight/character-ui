import axios from "axios"

export function SendNui (name, data) {
	axios.post(`https://pma-characters/${name}`, data)
		.catch((err) => console.error)
}
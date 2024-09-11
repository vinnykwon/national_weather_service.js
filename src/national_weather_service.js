class NationalWeatherService {
	constructor() {
		this.api = "https://api.weather.gov"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getOpenApi() {
		const response = await fetch(
			`${this.api}/openapi.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getGridForecast(latitude, longitude) {
		const response = await fetch(
			`${this.api}/points/${latitude},${longitude}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAlerts(state) {
		const response = await fetch(
			`${this.api}/alerts/active?area=${state}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {NationalWeatherService}

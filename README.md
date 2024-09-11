# national_weather_service.js
Web-API for [weather.gov](https://www.weather.gov) an agency of the United States federal government that is tasked with providing weather forecasts, warnings of hazardous weather, and other weather-related products to organizations and the public for the purposes of protection, safety, and general information

## Example
```JavaScript
async function main() {
	const { NationalWeatherService } = require("./national_weather_service.js")
	const nationalWeatherService = new NationalWeatherService()
	const stateAlerts = await nationalWeatherService.getAlerts("state")
	console.log(stateAlerts)
}

main()
```

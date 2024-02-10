// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
// export  const geoApi = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7d97fa6258msh0a1d758cb21421bp1a5208jsnd04fec2659d2',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// export const GEO_API_URL = 

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7d97fa6258msh0a1d758cb21421bp1a5208jsnd04fec2659d2',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const WAETHER_API_URL = 'https://api.openweathermap.org/data/2.5';
export const WAETHER_API_KEY = 'e73e3fa01dc8270a649b6404e4d49177'
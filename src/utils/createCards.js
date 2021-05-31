const createCards = (result) => {
	const card = document.createElement('div');
	card.classList.add('card');

	const countryContainer = document.createElement('div');
	countryContainer.classList.add('country-container');

	const cityOnCard = document.createElement('span');
	cityOnCard.classList.add('city');
	cityOnCard.textContent = result.name;

	const countryAbreviation = document.createElement('span');
	countryAbreviation.classList.add('country-abreviation');
	countryAbreviation.textContent = result.sys.country;

	const degrees = document.createElement('div');
	degrees.classList.add('degrees');
	const temp = Math.floor(result.main.temp);
	degrees.textContent = temp;

	const degreesSymbol = document.createElement('span');
	degreesSymbol.textContent = '°C';

	const description = document.createElement('p');
	description.classList.add('weather-description');
	description.textContent = result.weather[0].description;

	countryContainer.appendChild(cityOnCard);
	countryContainer.appendChild(countryAbreviation);
	degrees.appendChild(degreesSymbol);
	card.append(countryContainer, degrees, description);

	return card;
};

export default createCards;

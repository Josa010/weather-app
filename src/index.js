import '@styles/main.css';
import '@styles/phone.css';
import getData from './utils/getData';
import renderError from './utils/renderError';
import createCards from './utils/createCards';

const form = document.querySelector('form');
const input = document.querySelector('input');
const cardsContainer = document.querySelector('.cards-container');

form.addEventListener('submit', () => {
	if (input.value === '') {
		if (!document.querySelector('.error')) {
			renderError();
		}
	} else {
		if (document.querySelector('.error')) {
			const errorInDom = document.querySelector('span');
			errorInDom.remove();
		}

		const city = input.value;
		processData(city);
	}
});

const processData = async (city) => {
	const data = await getData(city);
	const cityExist = verifyIfCityAlreadyExist(data);

	if (data.message === 'city not found' || cityExist) {
		cityExist ? renderError('cityError') : renderError();
	} else {
		const card = createCards(data);
		cardsContainer.appendChild(card);
	}
};

const verifyIfCityAlreadyExist = (data) => {
	if (document.querySelector('.card')) {
		const NodeListOfCitys = document.querySelectorAll('.city');
		const listOfCitys = [...NodeListOfCitys];

		const test = listOfCitys.find((city) => city.innerHTML === data.name);
		return test;
	} else {
		return undefined;
	}
};

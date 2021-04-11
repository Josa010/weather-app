import '@styles/main.css';
import '@styles/phone.css'
import getData from './utils/getData'
import renderError from './utils/renderError'
import createCards from './utils/createCards'


const form = document.querySelector('form');
const input = document.querySelector('input');
const cardsContainer = document.querySelector('.cards-container');

form.addEventListener('submit', (event) => {
    
    if (input.value === '') {
        if (!document.querySelector('.error')) {
            renderError()
        }
    } else {
        if (document.querySelector('.error')) {
            const errorInDom = document.querySelector('span')
            errorInDom.remove()
        }

        const city = input.value
        processData(city)
    }
});


const processData = async (city) => {

    const result = await getData(city)
    const cityExist = verifyIfCityAlreadyExist(result)

    if (result.message === 'city not found' || cityExist) {
        if (cityExist) {
            renderError('cityError')
        } else {
            renderError()
        }
    } else {
        const card = createCards(result)
        cardsContainer.appendChild(card)
    }
}

const verifyIfCityAlreadyExist = (result) => {
    if (document.querySelector('.card')) {
        const NodeListOfCitys = document.querySelectorAll('.city')
        const listOfCitys = [...NodeListOfCitys]

        const cityExist = listOfCitys.map((city) =>{
            if (city.innerHTML === result.name){
                return true
            } else {
                return false
            }
        })

        const isTrue = (element) => element == true;
        const cityDoesExist = cityExist.findIndex(isTrue);
        return cityExist[cityDoesExist]
    }
    
    
}

const API = 'api.openweathermap.org/data/2.5/weather'
// api.openweathermap.org/data/2.5/weather?q=London&appid=6a6440d479752298ef71a968f36a9982
const KEY = '9770174b94aa3c9ffeefbfeccf963758'

const getData = async (city) => {
    try {
        const apiWithCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`
        const response = await fetch(apiWithCity)
        const data = await response.json()
        return data

    } catch (error) {
        console.error(error);
    }
}



export default getData
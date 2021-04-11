const label = document.querySelector('label')

const renderError = (cityError) => {
    if (cityError === 'cityError') {
        const error = document.createElement('span')
        error.className = "error"
        error.textContent = "You already searched for this city"
        label.appendChild(error)
    } else {
        const error = document.createElement('span')
        error.className = "error"
        error.textContent = "Please enter a valid city name"
        label.appendChild(error)
    }
}

export default renderError
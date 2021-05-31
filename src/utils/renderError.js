const label = document.querySelector('label');

const renderError = (cityError) => {
	if (cityError === 'cityError') {
		const error = document.createElement('span');
		error.className = 'error';
		error.textContent = 'Ya buscaste esta ciudad';
		label.appendChild(error);
	} else {
		const error = document.createElement('span');
		error.className = 'error';
		error.textContent = 'Ingrese un nombre de ciudad válido';
		label.appendChild(error);
	}
};

export default renderError;

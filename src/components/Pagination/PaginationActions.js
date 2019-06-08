export const previousPage = (value) => {
	return {
		type: 'DECRAMENT_CURRENT_PAGE',
		payload: {
		currentPage: value
		}
	}
}

export const nextPage = (value) => {
	return {
		type: 'INCRAMENT_CURRENT_PAGE',
		payload: {
		currentPage: value
		}
	}
}
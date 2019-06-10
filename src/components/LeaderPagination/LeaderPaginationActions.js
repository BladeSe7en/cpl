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
import axios from 'axios';

export const goToPage = (value) => {
	return {
		type: 'GO_TO_PAGE',
		payload: {
		currentPage: value
		}
	}
}

export const viewPerPage = (value) => {
	return {
		type: 'VIEW_PER_PAGE',
		payload: {
        viewPerPage: value,
        currentPage: 0
		}
	}
}


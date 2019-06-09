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

export const getCount = () => {
    const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'GET_COUNT',
		payload: axios({
			method: 'get',
			url: `/api/blogPosts/count?access_token=${accessToken}`
		})
		.then(response => {
			return response.data
		})
		.catch(err => err)
	}
}

export const previousPageTHread = (value) => {
	return {
		type: 'DECRAMENT_CURRENT_PAGE_THREAD',
		payload: {
		currentPage: value
		}
	}
}

export const nextPageThread = (value) => {
	return {
		type: 'INCRAMENT_CURRENT_PAGE',
		payload: {
		currentPage: value
		}
	}
}
import axios from 'axios';

export const goToPageThread = (value) => {
	return {
		type: 'GO_TO_PAGE_THREAD',
		payload: {
		currentPage: value
		}
	}
}

export const viewPerPageThread = (value) => {
	return {
		type: 'VIEW_PER_PAGE_THREAD',
		payload: {
        viewPerPageThread: value,
        currentPageThread: 0
		}
	}
}

export const getThreadCount = () => {
    const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'GET_THREAD_COUNT',
		payload: axios({
			method: 'get',
			url: `/api/threads/count?access_token=${accessToken}`
		})
		.then(response => {
			return response.data
		})
		.catch(err => err)
	}
}

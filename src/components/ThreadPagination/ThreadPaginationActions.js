export const previousPageThread = (value) => {
	return {
		type: 'DECRAMENT_CURRENT_PAGE_THREAD',
		payload: {
		currentPageThread: value
		}
	}
}

export const nextPageThread = (value) => {
	return {
		type: 'INCRAMENT_CURRENT_PAGE_THREAD',
		payload: {
		currentPageThread: value
		}
	}
}
import axios from 'axios';

export const goToPageThread = (value) => {
	return {
		type: 'GO_TO_PAGE_THREAD',
		payload: {
		currentPageThread: value
		}
	}
}

export const viewingPerPageThread = (value) => {
	return {
		type: 'VIEW_PER_PAGE_THREAD',
		payload: {
        viewPerPageThread: value,
        currentPageThread: 0
		}
	}
}

export const getThreadCount = (id) => {
	console.log('get thread count ID: ',id)
    const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'GET_THREAD_COUNT',
		payload: axios({
			method: 'get',
			url: `api/threads/count?where=%7B%22blogPostId%22%3A%20%22${id}%22%7D&access_token=${accessToken}`
		}) 
		.then(response => {
			return response.data
		})
		.catch(err => err)
	}
}

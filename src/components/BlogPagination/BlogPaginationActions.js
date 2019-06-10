import axios from 'axios';

export const previousPageBlog = (value) => {
	return {
		type: 'DECRAMENT_CURRENT_PAGE_BLOG',
		payload: {
		currentPageBlog: value
		}
	}
}

export const nextPageBlog = (value) => {
	return {
		type: 'INCRAMENT_CURRENT_PAGE_BLOG',
		payload: {
		currentPageBlog: value
		}
	}
}

export const goToPageBlog = (value) => {
	return {
		type: 'GO_TO_PAGE_BLOG',
		payload: {
		currentPageBlog: value
		}
	}
}

export const viewPerPageBlog = (value) => {
	return {
		type: 'VIEW_PER_PAGE_BLOG',
		payload: {
        viewPerPageBlog: value,
        currentPageBlog: 0
		}
	}
}

export const getCountBlog = () => {
    const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'GET_COUNT_BLOG',
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

export const resetBlog = () => {
	return {
		type: 'RESET_BLOG'
	}
}
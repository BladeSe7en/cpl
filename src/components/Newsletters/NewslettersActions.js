import axios from 'axios';

export const submitNewsletter = (msg) => {
	return {
		payload: axios({
			method: 'post',
			url: `/api/news`,
			data: {
                "date": msg.date,
                "lines": msg.lines
			}
		})
			.then(response => {
				return response.data
			})
			.catch(err => err)
	}
}

export const getNewsletters = (viewPerPage, skip) => {
    console.log('viewPerPage: ',viewPerPage)
    console.log('skip: ',skip)
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	return {
		type: 'GET_NEWSLETTERS',
		payload: axios({
			method: 'get',
			url: `api/news?filter[limit]=${viewPerPage}&filter[skip]=${skip}`
		})
			.then(response => {
				return response.data
			})
			.catch(err => err)
	}
}

export const isLoading = (value, page) => {
    return {
        type: 'TOGGLE_LOADING',
        payload: {
            isLoading: value,
            scrollingPage: page
        }
    }
}

export const getFirst = () => {
	return {
		type: 'GET_FIRST',
		payload: axios({
			method: 'get',
			url: `api/news?filter[order]=date%20ASC&filter[limit]=1`
        })
        .then(response => {
            return response.data
        })
			.catch(err => err)
	}
}

export const getLast = () => {
    console.log('inside last')
	return {
		type: 'GET_LAST',
		payload: axios({
			method: 'get',
			url: `api/news?filter[order]=date%20DESC&filter[limit]=1`
        })
        .then(response => {
            return response.data
        })
			.catch(err => err)
	}
}

export const updatePageInView = (value) => {
    return {
        type: 'UPDATE_PAGE_IN_VIEW',
        payload: {
            pageInView: value
        }
    }
}




// [where][and][0]condition1&[where][<and|or>]condition2
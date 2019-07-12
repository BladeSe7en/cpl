import axios from 'axios';

export const previousPageLeader = (value) => {
	return {
		type: 'DECRAMENT_CURRENT_PAGE_LEADER',
		payload: {
		currentPageLeader: value
		}
	}
}

export const nextPageLeader = (value) => {
	return {
		type: 'INCRAMENT_CURRENT_PAGE_LEADER',
		payload: {
		currentPageLeader: value
		}
	}
}

export const goToPageLeader = (value) => {
	return {
		type: 'GO_TO_PAGE_LEADER',
		payload: {
		currentPageLeader: value
		}
	}
}

export const viewPerPageLeaderboard = (value) => {
	return {
		type: 'VIEW_PER_PAGE_LEADER',
		payload: {
        viewPerPageLeader: value,
        currentPageLeader: 0
		}
	}
}

export const getCountLeader = () => {
    const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'GET_COUNT_LEADER',
		payload: axios({
			method: 'get',
			url: `/api/players/count?access_token=${accessToken}`
		})
		.then(response => {
			return response.data
		})
		.catch(err => err)
	}
}

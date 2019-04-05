import Axios from "axios";

export const type = (value) => {
	console.log('test2')
	return {
		type: 'CHANGE_GAME_TYPE',
		payload: {
			typeOfGame: value
			
		}
	}
}

export const highToLow = (value) => {
	return {
		type: 'TOGGLE_HIGH_TO_LOW',
		payload: {
			sortOrder: !value
		}
	}
}

export const sortBy = (value, order) => {
	return {
		type: 'TOGGLE_SORT_BY',
		payload: {
			sortBy: value,
			sortOrder: !order
		}
	}
}

export const getData = (sortBy, sortOrder) => {
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	const order = sortOrder?'ASC':'DESC';
	console.log('this is order: ',order)
	console.log('this is sortBy in get data: ',sortBy)
	console.log('this is url: ',`http://localhost:3000/api/players?access_token=${accessToken}&filter[order]=${sortBy}%20${order}`)
	return {
		type: 'GET_DATA',
		payload: Axios({
			method: 'get',
			url: `http://localhost:3000/api/players?access_token=${accessToken}&filter[order]=${sortBy}%20${order}`
		})
			.then(response => {
				return response.data
			})
			.catch(err => err)
	}
}

export const searchBy = (value, typeOfGame, BestCiv) => {
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	console.log('value in searchBy: ',value)
	console.log('this is url: ',`http://localhost:3000/api/players?access_token=${accessToken}&filter[where][${typeOfGame}${BestCiv}]=${value}`)
	return {
		type: 'GET_DATA',
		payload: Axios({
			method: 'get',
			url: `http://localhost:3000/api/players?access_token=${accessToken}&filter[where][${typeOfGame}${BestCiv}]=${value}`
		})
			.then(response => {
				return response.data
			})
			.catch(err => err)
	}
}




//filter[order]=CAREERSKILL%20ASC
//filter[order]=FFA%20ASC
//filter[order]=TEAM%20ASC
//filter[order]=DUEL%20ASC

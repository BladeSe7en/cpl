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

export const getData = (typeOfGame, sortOrder) => {
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	const order = sortOrder?'ASC':'DESC';
	console.log('this is order: ',order)
	console.log('this is typeOfGame in get data: ',typeOfGame)
	console.log('this is url: ',`http://localhost:3000/api/players?access_token=${accessToken}&filter[order]=${typeOfGame}%20${order}`)
	return {
		type: 'GET_DATA',
		payload: Axios({
			method: 'get',
			url: `http://localhost:3000/api/players?access_token=${accessToken}&filter[order]=${typeOfGame}%20${order}`
		})
			.then(response => {
				return response.data
			})
			.catch(err => err)
	}
}

export const profile = () => {
	return {
		type: 'GET_PROFILE',
		payload: Axios({
			method: 'get',
			url: 'http://localhost:3000/api/players?filter=%7B%22where%22%3A%7B%22id%22%3A1%7D%7D&access_token=ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
		})
			.then(response => {
				console.log('this is data1: ',response.data);
				return response.data
			})
			.catch(err => err)
	}
}


//filter[order]=CAREERSKILL%20ASC
//filter[order]=FFA%20ASC
//filter[order]=TEAM%20ASC
//filter[order]=DUEL%20ASC

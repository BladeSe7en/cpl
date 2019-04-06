import Axios from "axios";

export const type = (value) => {
	console.log('value2: ', value)
	
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

export const sortBy = (value, sortOrder) => {
	return {
		type: 'TOGGLE_SORT_BY',
		payload: {
			sortBy: value,
			sortOrder: !sortOrder
		}
	}
}

export const getData = (sortBy, sortOrder) => {
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	const order = sortOrder?'DESC':'ASC';
	console.log('this is order: ',order)
	console.log('this is sortBy in get data: ',sortBy)
	console.log('this is url: ',`http://localhost:3000/api/players?access_token=${accessToken}&filter[order]=${sortBy}%20${order}`)
	return {
		type: 'GET_DATA',
		payload: Axios({
			method: 'get',
			url: `http://localhost:3000/api/players?filter=%7B%20%22order%22%3A%20%22${sortBy}%20${order}%22%20%7D&access_token=${accessToken}`
			//url: `http://localhost:3000/api/players?filter=%7B%20%22order%22%3A%20%22careerSkill%20DESC%22%20%7D&access_token=ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx`

		})
			.then(response => {
				return response.data
			})
			.catch(err => err)
	}
}

export const searchBy = (selected, typeOfGame, BestLeader) => {
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	console.log('selected in searchBy: ',selected)
	console.log('this is url: ',`http://localhost:3000/api/players?access_token=${accessToken}&filter[where][${typeOfGame}${BestLeader}]=${selected}`)
	return {
		type: 'GET_DATA',
		payload: Axios({
			method: 'get',
			url: `http://localhost:3000/api/players?filter=%7B%22where%22%3A%20%7B%22${typeOfGame}${BestLeader}%22%3A%20%22${selected}%22%7D%7D&access_token=${accessToken}`
	      //url: `http://localhost:3000/api/players?filter=%7B%22where%22%3A%20%7B%22careerBestLeader%22%3A%20%22ZuluShaka%22%7D%7D&access_token=ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx`
		})
			.then(response => {
				return response.data
			})
			.catch(err => err)
	}
}







//{"where": {"careerBestLeader": "ZuluShaka"}};
//{ "order": "careerSkill ASC" }
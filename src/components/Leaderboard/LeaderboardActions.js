import Axios from "axios";

export const type = (value) => {
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

export const getData = (sortBy, sortOrder, viewPerPage, skip) => {
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	const order = sortOrder?'DESC':'ASC';
	return {
		type: 'GET_DATA',
		payload: Axios({
			method: 'get',
			url: `api/players?filter[order]=${sortBy}%20${order}&filter[limit]=${viewPerPage}&filter[skip]=${skip}&access_token=${accessToken}`
		})
			.then(response => {
				return response.data
			})
			.catch(err => err)
	}
}

export const searchBy = (selected, typeOfGame, BestLeader) => {
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	return {
		type: 'GET_DATA',
		payload: Axios({
			method: 'get',
			url: `api/players?filter=%7B%22where%22%3A%20%7B%22${typeOfGame}${BestLeader}%22%3A%20%22${selected}%22%7D%7D&access_token=${accessToken}`
		})
			.then(response => {
				return response.data
			})
			.catch(err => err)
	}
}

export const updateProfile = (value) => {
	return {
		type: 'UPDATE_PROFILE_ID',
		payload: {
			profileId: value
		}
		
	}
}







//{"where": {"careerBestLeader": "ZuluShaka"}}
//{ "order": "careerSkill ASC" }


import Axios from "axios";

export const getProfile = (profile) => {
    console.log('5: ', profile)
	const accessToken = 'ZHWTGJ9sPahvLeQ8M97jtO7XwSlRGYJ4XZSMhprA8GzGNM5AXNcdJDtM67MHEIPx'
	return {
		type: 'GET_PROFILE',
		payload: Axios({
			method: 'get',
			url: `http://localhost:3000/api/players?filter=%7B%22where%22%3A%20%7B%22id%22%3A%20${profile}%7D%7D&access_token=${accessToken}`
		})
			.then(response => {
				console.log('ddddddd: ', response.data)
				return response.data
			})
			.catch(err => err)
	}
}
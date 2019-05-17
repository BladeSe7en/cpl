import axios from 'axios';

export const thread = (value, id) => {
	console.log('thread value: ', value)

	return {
		type: 'TOGGLE_THREAD_VIEW',
		payload: {
        viewingThread: value,
        id: id

		}
	}
}
export const getBlogs = () => {
	return {
		type: 'GET_BLOGS',
		payload: axios({
			method: 'get',
			url: '/api/blogPosts'
		})
		.then(response => {
			return response.data
		})
		.catch(err => err)
	}
}

export const sortByPopularity = (popularityOrder) => {
	const order = popularityOrder?'DESC':'ASC';
	return {
		type: 'SORT_POPULARITY',
		payload: axios({
			method: 'get',
			url: `/api/blogPosts/?filter=%7B%22order%22%3A%22upVotes%20${order}%22%7D`
		})
		.then(response => {
			return response.data
		})
		.catch(err => err)
	}
}

export const getThreadsById = (id) => {
    console.log('inside getThreadsById: ',id)
    const test = '5cce55288722dd4aedf1adf3'
    console.log('this is test: ', test)
    const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'GET_THREADS_BY_ID',
		payload: 
            axios({
			method: 'get',
            url: `http://localhost:3000/api/threads/?filter=%7B%22where%22%3A%7B%22blogPostId%22%3A%22${id}%22%7D%7D&access_token=${accessToken}`
        })      
		.then(response => {
            return response.data
		})
		.catch(err => err)
    }
}

export const commentCount = (id) => {
    console.log('inside commentCount: ',id)
    const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'GET_COUNT',
		payload: 
            axios({
			method: 'get',
            url: `http://localhost:3000/api/threads/?filter=%7B%22where%22%3A%7B%22blogPostId%22%3A%22${id}%22%7D%7D&access_token=${accessToken}`
        })      
		.then(response => {
            return response.data
		})
		.catch(err => err)
    }
}

export const addComment = (data) => {
	const accessToken ='5cc16624e810e7579a1581c1'
	//const stringifted = JSON.stringify(data);
	//console.log('this is stringified data: ',stringifted)
	return {
		type: 'ADD_COMMENT',
		payload: 
            axios({
			method: 'post',
			url: `http://localhost:3000/api/threads?access_token=${accessToken}`,
			data: data
        })      
		.then(response => {
            return response.data
		})
		.catch(err => err)
    }
}

export const onCommentChange = (key, value) => {
	return {
		type: 'ON_CHANGE',
		payload: {
			[key]: value
		}
	}
}

export const vote = (id, voteCount, voteNames) => {
	console.log('this is typeof vote count: ', typeof(voteCount))
	console.log('inside get blogs')
	const accessToken ='5cc16624e810e7579a1581c1'
	return {
		type: 'UP_VOTE',
		payload: axios({
			method: 'get',
			url: `/api/blogPosts/${id}?access_token=${accessToken}`
		})
		.then(response => {
			let data = response.data
			console.log('this should be original data: ',data)
			let updatedData = {
				blogBody: data.blogBody,
				blogTitle: data.blogTitle,
				date: data.date,
				id: data.id,
				memberId: data.memberId,
				numComments: data.numComments,
				steamNameId: data.steamNameId,
				upVotes: +voteCount,
				voteNames: voteNames
			}
			axios({
				method: 'put',
				url: `/api/blogPosts?access_token=${accessToken}`,
				data: updatedData
			})      
			.then(response => {
				console.log('this is response.data: ',response.data)
				return response.data
			})
			.catch(err => err)
		})
		.catch(err => err)
	}
}

export const threadDelete = (deleteId) => {
	const accessToken ='5cc16624e810e7579a1581c1'
	console.log('this is threadId inside action: ', deleteId)
	return {
		type: 'DELETE_THREAD',
		payload: 
            axios({
			method: 'delete',
			url: `http://localhost:3000/api/threads/${deleteId}?access_token=${accessToken}`,
        })
		.then(response => {
            return response.data
		})
		.catch(err => err)
    }
}

export const topicDelete = (deleteId) => {
	const accessToken ='5cc16624e810e7579a1581c1'
	console.log('this is threadId inside topic delete action: ', deleteId)
	return {
		type: 'DELETE_TOPIC',
		payload: 
            axios({
			method: 'delete',
			url: `http://localhost:3000/api/blogPosts/${deleteId}?access_token=${accessToken}`,
        })
		.then(response => {
            return response.data
		})
		.catch(err => err)
    }
}

export const commentSubmit = (date, comment, memberId) => {
	const accessToken ='5cc16624e810e7579a1581c1'
	console.log('this is threadId inside topic delete action: ', deleteId)
	let data = {
		"blogPostId": "5cddd0f06f9812fd03ef019a",
		"comment": "adding one more",
		"date": 1557984001571,
		"memberId": "76561198304352606",
		"steamAvatarId": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8c/8ce8d4325808f6a8030da27cb3d15302b3abd6ce.jpg",
		"steamNameId": "BladeSe7en [ICON_RESOURCE_FURS]",
		"wasEdited": false
		}
	return {
		type: 'DELETE_TOPIC',
		payload: 
            axios({
			method: 'delete',
			url: `http://localhost:3000/api/threads?access_token=${accessToken}`,
        })
		.then(response => {
            return response.data
		})
		.catch(err => err)
    }
}

// {"where":{"id":5cce56488722dd4aedf1adf8}}
// `%7B%22where%22%3A%7B%22id%22%3A${id}%7D%7D`

// {"where":{"blogPostId":"5cce532f8722dd4aedf1ade7"}}
// {"order":"upVote ASC"}
// %7B%22order%22%3A%22date%20ASC%22%7D

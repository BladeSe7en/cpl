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
    console.log('inside get blogs')
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
	console.log('inside sort by popularity')
	console.log('this is popularityOrder: ',popularityOrder)
	const order = popularityOrder?'DESC':'ASC';
	console.log('this is order: ',order)
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

export const addComment = (data, id) => {
    console.log('inside addComment: ',id)
	const accessToken ='5cc16624e810e7579a1581c1'
	const stringifted = JSON.stringify(data);
	console.log('this is stringified data: ',stringifted)
	return {
		type: 'ADD_COMMENT',
		payload: 
            axios({
			method: 'get',
			url: `http://localhost:3000/api/threads?access_token=${accessToken}`,
			data: stringifted
        })      
		.then(response => {
            return response.data
		})
		.catch(err => err)
    }
}

export const onChange = (key, value) => {
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

// {"where":{"id":5cce56488722dd4aedf1adf8}}
// `%7B%22where%22%3A%7B%22id%22%3A${id}%7D%7D`

// {"where":{"blogPostId":"5cce532f8722dd4aedf1ade7"}}
// {"order":"upVote ASC"}
// %7B%22order%22%3A%22date%20ASC%22%7D
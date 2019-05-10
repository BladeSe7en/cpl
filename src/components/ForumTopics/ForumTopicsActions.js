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
			data: data
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

// {"where":{"id":5cce56488722dd4aedf1adf8}}
// `%7B%22where%22%3A%7B%22id%22%3A${id}%7D%7D`

// {"where":{"blogPostId":"5cce532f8722dd4aedf1ade7"}}
// {"order":"upVote ASC"}
// %7B%22order%22%3A%22date%20ASC%22%7D




[
	{
	  "date": "1556850960000",
	  "date": "1556850960000",
	  "date": "1556894400000",
	  "date": "1556898180",
	  "date": "1556898180000",
	  "date": "1556899800000",
	  "date": "1556961600000",
	  "date": "1557008100000",
	  "date": "1557023760000",
	  "date": "1557045180000",
	  "date": "1557141300000",
	}
  ]
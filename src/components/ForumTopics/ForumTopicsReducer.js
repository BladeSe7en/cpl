
const initialstate = {
    viewingThread  : false,
    viewingThreadId: 0,
    blogs          : [],
    threads        : [],
    id             : '',
    number         : 0,
    comment        : '',
    count          : []
    
}

export default function ForumTopicsReducer(state = initialstate, action) {
    const { payload, type } = action;
    switch (type){
        case 'TOGGLE_THREAD_VIEW':{
            return {
                ...state,
               ...payload
            }
        }
        case 'GET_BLOGS_FULFILLED': {
			return {
				...state,
			    blogs: payload
			}
        };
        
        case 'GET_THREADS_BY_ID_FULFILLED': {
			return {
				...state,
                threads: payload
			}
        };
        
        case 'ADD_COMMENT_FULFILLED': {
            console.log('this is payload: ',payload)
            return {
				...state,
                comment: ''
                //blogs: payload
			}
        };

        case 'SORT_POPULARITY_FULFILLED': {
            return {
                ...state,
                blogs: payload
            }
        }

        case 'ON_CHANGE': {
			return {
				...state,
				...payload
			}
        }

        case 'UP_VOTE_FULFILLED': {
			return {
				...state,
				...payload
			}
        }

        case 'DELETE_THREAD_FULFILLED': {
			return {
				...state,
				...payload
			}
        }

        case 'DELETE_TOPIC_FULFILLED': {
			return {
				...state,
				...payload
			}
        }

        case 'LIVE_CHANGE_BLOGS': {
            let newBlogs = [...state.blogs];
            let newObj = payload.blogs;
            let index = newBlogs.findIndex(blog => {
                return blog.id == payload.blogs.id;
            })
            newBlogs.splice(index, 1, {
                ...newObj
            })
			return {
				...state,
				blogs: newBlogs
			}
        }
        
        default: {
            return state
          }
    }
}

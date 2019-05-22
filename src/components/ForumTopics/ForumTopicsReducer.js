
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
            return {
				...state,
				comment: ''
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
            let oldBlogs = [...state.blogs]
            let newBlogs = oldBlogs
            let newObj = payload.blogs
            newBlogs.push(newObj)
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

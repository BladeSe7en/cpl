const initialstate = {
    viewingThread: false,
    blogs        : [],
    threads      : [],
    id           : ''
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
			console.log('inside GET BLOG reducer')
			return {
				...state,
				blogs: payload 
			}
        };
        
        case 'GET_THREADS_BY_ID_FULFILLED': {
			console.log('inside GET BLOG reducer')
			return {
				...state,
                threads: payload
			}
		};

        default: {
            return state
          }
    }
}
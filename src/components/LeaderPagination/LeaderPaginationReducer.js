const initialstate = {
    viewPerPage: 10,
    currentPage: 0,
    lastPage   : 0,
    totalCount : 0
}

export default function leaderPaginationReducer(state = initialstate, action) {
    const { payload, type } = action; 

    switch(type) {
        case 'DECRAMENT_CURRENT_PAGE': {
            return {
                ...state,
                ...payload

            }
        }

        case 'INCRAMENT_CURRENT_PAGE': {
            return {
                ...state,
               ...payload

            }
        }

        case 'GO_TO_PAGE': {
            return {
                ...state,
               ...payload

            }
        }

        case 'VIEW_PER_PAGE': {
            return {
                ...state,
               ...payload

            }
        }

        case 'GET_BLOG_COUNT_FULFILLED': {
            console.log('patload.count: ',payload.count)
            return {
                ...state,
              totalCount: payload.count

            }
        }
        

        default: {
            return state
        }
    }
}
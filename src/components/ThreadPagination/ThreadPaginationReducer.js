const initialstate = {
    viewPerPageThread: 10,
    currentPageThread: 0,
    lastPageThread   : 0,
    totalCountThread : 0
}

export default function threadPaginationReducer(state = initialstate, action) {
    const { payload, type } = action; 

    switch(type) {
        case 'DECRAMENT_CURRENT_PAGE_THREAD': {
            return {
                ...state,
                ...payload

            }
        }

        case 'INCRAMENT_CURRENT_PAGE_THREAD': {
            return {
                ...state,
               ...payload

            }
        }

        case 'GO_TO_PAGE_THREAD': {
            return {
                ...state,
               ...payload

            }
        }

        case 'VIEW_PER_PAGE_THREAD': {
            return {
                ...state,
               ...payload

            }
        }

        case 'GET_THREAD_COUNT_FULFILLED': {
            console.log('payload.count: ', payload.count)
            return {
                ...state,
              totalCountThread: payload.count

            }
        }
        

        default: {
            return state
        }
    }
}
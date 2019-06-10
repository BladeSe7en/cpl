const initialstate = {
    viewPerPage: 10,
    currentPage: 0,
    lastPage   : 0,
    totalCount : 0
}

export default function threadPaginationReducer(state = initialstate, action) {
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

        case 'GET_THREAD_COUNT_FULFILLED': {
            let count = payload.count;
            let lastPage = (Math.floor(count / 10)-1);
            return {
                ...state,
              totalCountThread: count,
              lastPageThread  : lastPage

            }
        }
        

        default: {
            return state
        }
    }
}
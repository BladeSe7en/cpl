const initialstate = {
    viewPerPageLeader: 10,
    currentPageLeader: 0,
    lastPageLeader   : 0,
    totalCountLeader : 0
}

export default function leaderPaginationReducer(state = initialstate, action) {
    const { payload, type } = action; 

    switch(type) {
        case 'DECRAMENT_CURRENT_PAGE_LEADER': {
            return {
                ...state,
                ...payload

            }
        }

        case 'INCRAMENT_CURRENT_PAGE_LEADER': {
            return {
                ...state,
               ...payload

            }
        }

        case 'GO_TO_PAGE_LEADER': {
            return {
                ...state,
               ...payload

            }
        }

        case 'VIEW_PER_PAGE_LEADER': {
            return {
                ...state,
               ...payload

            }
        }

        case 'GET_COUNT_LEADER_FULFILLED': {
            return {
                ...state,
              totalCountLeader: payload.count

            }
        }
        

        default: {
            return state
        }
    }
}
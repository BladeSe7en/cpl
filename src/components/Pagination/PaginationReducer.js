const initialstate = {
    viewPerPage: 10,
    currentPage: 0
}

export default function paginationReducer(state = initialstate, action) {
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

        default: {
            return state
        }
    }
}
const initialstate = {
    viewPerPageBlog: 10,
    currentPageBlog: 0,
    lastPageBlog   : 0,
    totalCountBlog : 0
}

export default function paginationReducer(state = initialstate, action) {
    const { payload, type } = action; 

    switch(type) {
        case 'DECRAMENT_CURRENT_PAGE_BLOG': {
            return {
                ...state,
                ...payload

            }
        }

        case 'INCRAMENT_CURRENT_PAGE_BLOG': {
            return {
                ...state,
               ...payload

            }
        }

        case 'GO_TO_PAGE_BLOG': {
            return {
                ...state,
               ...payload

            }
        }

        case 'VIEW_PER_PAGE_BLOG': {
            return {
                ...state,
               ...payload

            }
        }

        case 'GET_COUNT_BLOG_FULFILLED': {
            console.log('patload.count: ',payload.count)
            return {
                ...state,
              totalCountBlog: payload.count

            }
        }

        case 'RESET_BLOG': {
            return {
                ...initialstate
            }
        }
        

        default: {
            return state
        }
    }
}
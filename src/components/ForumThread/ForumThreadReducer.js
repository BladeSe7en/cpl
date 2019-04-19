const initialstate = {
}

export default function ForumThreadReducer(state = initialstate, action) {
    const { payload, type } = action;
    switch (type){
        case 'GET_EVENTS_FULFILLED':{
            return {
                ...state,
                eventInfo: payload
            }
        }
        default: {
            return state
          }
    }
}
const initialstate = {
}

export default function ForumTopicsReducer(state = initialstate, action) {
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
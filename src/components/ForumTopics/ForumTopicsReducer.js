const initialstate = {
    viewingThread: false
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
        default: {
            return state
          }
    }
}
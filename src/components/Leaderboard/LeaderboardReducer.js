const initialstate = {
    typeOfGame: 'career',
    highToLow: true,
    sortBy: "careerSkill",
    data: [],
    profile: {},
    sortOrder: true
}

export default function LeaderboardReducer(state = initialstate, action) {
    const { payload, type } = action; 

    switch(type) {
        
        case 'CHANGE_GAME_TYPE': {
            console.log('how many times am i here: ');
            console.log('this is payload: ',payload);
            return {
                ...state,
                typeOfGame: payload
            }
        }

        case 'TOGGLE_HIGH_TO_LOW': {
            return {
                ...state,
                highToLow: payload
            }
        }

        case 'TOGGLE_SORT_BY': {
            return {
                ...state,
                sortBy: payload
            }
        }

        case 'GET_DATA_FULFILLED': {
            console.log('this is main data: ', payload)
            return {
                ...state,
                data: payload
            }
        }

        case 'GET_DATA_FULFILLED': {
            console.log('4')
            return {
                ...state,
                profile: payload
            }
        }
        default: {
            return state
        }
    }
}

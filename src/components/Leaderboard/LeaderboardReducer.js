const initialstate = {
    gameType: 'FFA'
}

export default function LeaderboardReducer(state = initialstate, action) {
    const { payload, type } = action; 

    switch(type) {
        case 'SET_GAME_TYPE': {
            return {
                ...state,
                gameType: payload
            }
        }
        default: {
            return state
        }
    }
}

export const gameType = (value) => {
	return {
		type: 'CHANGE_GAME_TYPE',
		payload: {
			gmaeType: value
		}
	}
}

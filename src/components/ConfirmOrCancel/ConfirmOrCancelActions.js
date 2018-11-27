import axios from 'axios';

export const changeTalkStatus = (talkId, selectedStatus, speakerToken) => {
    return {
        type: 'SUBMIT_STATUS',
        payload:
            axios({
                method: 'put',
                url: 'api/talks/changeTalkStatus',
                data: {
                    talkId,
                    selectedStatus
                }
            }).then(() => {
                axios({
                    method: 'delete',
                    url: (`api/accessTokens/${speakerToken}`),
                    data: {
                        speakerToken: speakerToken,
                    }
                })
            })
    }
}

export const handleSpeakerToken = (t) => {
    return {
        type: 'HANDLE_SPEAKER_TOKEN',
        payload: t
    }
}

export const handleTalkId = (id) => {
    return {
        type: 'HANDLE_TALK_ID',
        payload: id
    }
}

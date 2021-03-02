const INITIAL = {
    username: '',
}

export default function userReducer(state = INITIAL, { type, payload }) {
    switch (type) {
        case 'LOG_IN':
            return { username: payload.username }
        case 'LOG_OUT':
            return INITIAL
        default:
            return state
    }
}
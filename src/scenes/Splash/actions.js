const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'

const actions = {
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE
}

const loadUserRequest = () => {
    return {
        type: actions.LOAD_USER_REQUEST
    }
}

const loadUserSuccess = () => {
    return {
        type: actions.LOAD_USER_SUCCESS
    }
}

const loadUserFailure = () => {
    return {
        type: actions.LOAD_USER_FAILURE,
        error
    }
}

const loadUser = (appStore) => {
    return (dispatch) => {
        
    }
}

module.exports = { 
    loadUserRequest,
    loadUserSuccess,
    loadUserFailure,
    loadUser,
    actions
}
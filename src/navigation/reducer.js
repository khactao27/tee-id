import { actions } from './actions'

const initialState = {

}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.MOVE:
        case actions.RESET:
        default:
            return
    }
}
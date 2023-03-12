import { combineReducers } from 'redux'

import splash from '@scenes/Splash/reducer'
import login from '@scenes/Login/reducer'

export default combineReducers({
    splash,
    login,
})
export default class User {
    constructor(id, type, userId, userInfoString, isActive) {
        this.id = id
        this.type = type
        this.userId = userId
        this.userInfoString = userInfoString
        this.isActive = isActive
    }
}
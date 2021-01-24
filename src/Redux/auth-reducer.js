let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth:false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth:true,
            }
        default:
            return state
    }
}
export function setUsersDataActionCreator(id,email,login) {
    return {
        type: "SET_USER_DATA",
        data:{
            id,
            email,
            login,
        }
    }
}
export function isFetchingActionCreator(isFetching) {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    }
}


export default authReducer;
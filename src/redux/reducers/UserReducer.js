const userInfoFromaLocalStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : undefined


// const initialState = {
//     userSignin: {
//         userInfo: userInfoFromaLocalStorage,
//     },
// }
const initialState = {
    userInfo: userInfoFromaLocalStorage,
}

// export const UserSigninReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'USER_LOGIN_SUCCESS':
//             return { ...state, userInfo: action.payload }
//         case 'USER_LOGIN_FAIL':
//             return { ...state, error: action.payload }
//         default:
//             return state
//     }
// }

export const UserSignupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_SIGNUP_SUCCESS':
            return { ...state, userInfo: action.payload }
        default:
            return state
    }
}

export const UserSignoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_SIGNOUT_SUCCESS':
            return { ...state }
        default:
            return state
    }
}

export const getAllUserReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'USER_LOGIN_SUCCESS':
            return { ...state, userInfo: action.payload }

        case 'USER_LOGIN_FAIL':
            return { ...state, error: action.payload }

        case 'GET_ALL_USER': {
            return { ...state, user: action.payload }
        }

        case 'UPDATE_USER': {
            return { ...state, userInfo: action.payload }
        }

        case 'DELETE_USER': {
            return { ...state }
        }

        default:
            return state
    }
}

// export const deleteUserReducer = (state = {}, action) => {
//     switch (action.type) {

//         default: return state
//     }
// }

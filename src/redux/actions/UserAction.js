import axios from 'axios'

export const login = (user) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:4000/user/login', user)
        console.log(data)
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response.data.message })
    }
}

export const SignupUser = (user) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:4000/user/register', user)
        localStorage.setItem('userInfo', JSON.stringify(data))
        dispatch({ type: 'USER_SIGNUP_SUCCESS', payload: data })
        // document.location.href = '/login'
    } catch (error) {}
}

export const SignoutUser = (user) => async (dispatch) => {
    localStorage.removeItem('userInfo')
    // dispatch({ type: 'USER_SIGNOUT_SUCCESS', payload: {} })
    dispatch({ type: 'USER_SIGNOUT_SUCCESS' })
    document.location.href = '/login'
}

export const getAllUser = () => async (dispatch, getState) => {
    const {
        getUsers: { userInfo },
    } = getState()
    try {
        const { data } = await axios.get('http://localhost:4000/user')
        dispatch({ type: 'GET_ALL_USER', payload: data })
    } catch (error) {
        dispatch({ type: 'GET_ALL_USER_FAIL', payload: error.message })
    }
}

export const updateUser = (user) => async (dispatch, getState) => {
    
    // console.log(user)
    const {
        getUsers: { userInfo },
    } = getState()
    try {
        const { data } = await axios.put(`http://localhost:4000/user/update/${userInfo._id}`, user, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        })
        dispatch({ type: 'UPDATE_USER', payload: data })
    } catch (error) {
        dispatch({ type: 'UPDATE_USER_FAIL', error: error.message })
    }
}
export const deleteUser = (userId) => async (dispatch, getState) => {
    const {
        getUsers: { userInfo },
    } = getState()
    try {
        const { data } = await axios.delete(`http://localhost:4000/user/delete/${userId}`)
        dispatch({ type: 'DELETE_USER', payload: data })
    } catch (error) {
        dispatch({ type: 'DELETE_USER_FAIL', error: error.message })
    }
}

import axios from 'axios'

export const createOrderGhn = (orderId) => async (dispatch) => {
    try {
        // console.log('h')
        const { data } = await axios.post(`http://localhost:4000/order/update/${orderId}`)
        // console.log(data)

        dispatch({ type: 'CREATE_ORDER_GHN', payload: data })
    } catch (error) {
        dispatch({ type: 'CREATE_ORDER_GHN_FAIL', payload: error })
    }
}

export const PrintOrderGhn = (orderId) => async (dispatch) => {
    try {
        // console.log(orderId)
        const { data } = await axios.get(`http://localhost:4000/order/print/${orderId}`)
        console.log(data)
        window.open(data)
        dispatch({ type: 'PRINT_ORDER_GHN', payload: data })
    } catch (error) {}
}

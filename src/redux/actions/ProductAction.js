import axios from 'axios'
import actions from './product.action'
import { BASE_URL } from '../../constants/UserConstant'
// import { axiosClient } from '../services/config.services'
// import { BASE_URL } from '../constants/UserConstant'
import { axiosClient } from '../../services/config.services'

export const filterProductByType = (type) => async (dispatch) => {
    try {
        // console.log(type)
        const { data } = await axios.get(`${BASE_URL}/products/${type}`)
        dispatch({ type: 'FILTER_PRODUCT_BY_TYPE', payload: data })
    } catch (error) {
        dispatch({ type: 'FILTER_PRODUCT_BY_TYPE_FAIL', payload: error.message })
    }
}

export const filterProductByRandomField = (infoProduct) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/products/filter/random`, infoProduct)
        dispatch({ type: 'FILTER_PRODUCT_BY_RANDOM_FIELD', payload: data })
    } catch (error) {}

    // dispatch({ type: "FILTER_PRODUCT_BY_RANDOM_FIELD", payload: infoProduct });
}

export const getAllProduct = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:4000/products/`)
        dispatch({ type: 'GET_ALL_PRODUCT', payload: data })
    } catch (error) {
        dispatch({ type: 'GET_ALL_PRODUCT_FAIL', payload: error.message })
    }
}

export const getAllProductByType = (type) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`http://localhost:4000/products/search/type?type=${type}`)
        dispatch({ type: 'GET_ALL_PRODUCT_BY_TYPE', payload: data })
    } catch (error) {
        dispatch({ type: 'GET_ALL_PRODUCT_BY_TYPE_FAIL', payload: error.message })
    }
}

export const getAllProductByBrand = (brand) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`http://localhost:4000/products/search/brand?brand=${brand}`)
        dispatch({ type: 'GET_ALL_PRODUCT_BY_BRAND', payload: data })
    } catch (error) {
        dispatch({ type: 'GET_ALL_PRODUCT_BY_BRAND_FAIL', payload: error.message })
    }
}

export const searchProduct = (name) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`http://localhost:4000/products/search/product?name=${name}`)
        dispatch({ type: 'SEARCH_PRODUCT', payload: data })
    } catch (error) {
        dispatch({ type: 'SEARCH_PRODUCT_FAIL', payload: error.message })
    }
}

export const ascendingProduct = (products) => async (dispatch, getState) => {
    dispatch({ type: 'ASCENDING_PRODUCT' })
}

export const descendingProduct = (products) => async (dispatch, getState) => {
    dispatch({ type: 'DESCENDING_PRODUCT' })
}

export const filterProduct = (name) => async (dispatch, getState) => {
    dispatch({ type: 'FILTER_PRODUCT', payload: name })
}

export const filterProductByPrice = (startPrice, endPrice) => async (dispatch, getState) => {
    dispatch({
        type: actions.FILTER_PRODUCT_BY_PRICE,
        payload: { startPrice, endPrice },
    })
}

export const editCurrentPage = (page) => async (dispatch) => {
    dispatch({ type: 'EDIT_CURRENT_PAGE', payload: page })
}

export const paginationProduct = (page) => async (dispatch) => {
    try {
        const data = await axiosClient.get(`/products/pagination/${page}`)
        dispatch({ type: 'PAGINATION_PRODUCT', payload: data })
    } catch (error) {}
}

export const getproductById = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:4000/products/detail/${id}`)
        dispatch({ type: 'GET_PRODUCT_BY_ID', payload: data })
    } catch (error) {
        dispatch({ type: 'GET_PRODUCT_BY_ID_FAIL', payload: error.message })
    }
}

export const removeProductById = (id) => async (dispatch) => {
    dispatch({ type: 'REMOVE_PRODUCT_BY_ID' })
}

export const saveProduct = (product) => async (dispatch, getState) => {
    
    console.log(product)

    try {
        const {
            getUsers: { userInfo },
        } = getState()
        if (!product.get('_id')) {
            const { data } = await axios.post('http://localhost:4000/products/create', product, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            })
            dispatch({ type: 'SAVE_PRODUCT', payload: data })
        } else {
            const { data } = await axios.put(`http://localhost:4000/products/update`, product, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            })
            dispatch({ type: 'SAVE_PRODUCT', payload: data })
        }
    } catch (error) {
        dispatch({ type: 'SAVE_PRODUCT_FAIL', payload: error.message })
    }
}

export const DeleteProduct = (productId) => async (dispatch, getState) => {
    try {
        const {
            getUsers: { userInfo },
        } = getState()
        const { data } = await axios.delete(`http://localhost:4000/products/delete/${productId}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        })
        dispatch({ type: 'DELETE_PRODUCT', payload: data })
    } catch (error) {
        dispatch({ type: 'DELETE_PRODUCT_FAIL', payload: error.message })
    }
}
export const DeleteAllProduct = () => async (dispatch, getState) => {
    try {
        const {
            getUsers: { userInfo },
        } = getState()
        const { data } = await axios.delete(`http://localhost:4000/products/delete/all`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        })
        dispatch({ type: 'DELETE_ALL_PRODUCT', payload: data })
    } catch (error) {
        dispatch({ type: 'DELETE_ALL_PRODUCT_FAIL', payload: error.message })
    }
}

export const HandlePaymentProduct = (product) => async (dispatch, getState) => {
    // console.log(product)
    try {
        const {
            getUsers: { userInfo },
        } = getState()
        const { data } = await axios.put(`http://localhost:4000/products/handlepayment`, product, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        })
        dispatch({ type: 'HANDLE_PAYMENT_PRODUCT', payload: data })
    } catch (error) {
        dispatch({ type: 'HANDLE_PAYMENT_FAIL', payload: error.message })
    }
}

// --------------------------------------------------------------
// export const DeleteAllProduct = (productId) => async (dispatch, getState) => {
//     try {
//         const {
//             getUsers: { userInfo },
//         } = getState()
//         const { data } = await axios.delete(`http://localhost:4000/products/delete/${productId}`, {
//             headers: {
//                 Authorization: `Bearer ${userInfo.token}`,
//             },
//         })
//         dispatch({ type: 'DELETE_PRODUCT', payload: data })
//     } catch (error) {
//         dispatch({ type: 'DELETE_PRODUCT_FAIL', payload: error.message })
//     }
// }
// --------------------------------------------------------------

// ----------------------------------------Type----------------------------------------------

export const descendingFilterProduct = (products) => async (dispatch, getState) => {
    dispatch({ type: 'DESCENDING_FILTERPRODUCT', payload: products })
}

export const ascendingFilterProduct = (products) => async (dispatch, getState) => {
    dispatch({ type: 'ASCENDING_FILTERPRODUCT', payload: products })
}

// ---------------------------------------Type-------------------------------------------
// ---------------------------------------Brand-------------------------------------------

// ---------------------------------------Brand-------------------------------------------

export const reviewProduct = (id, review) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`http://localhost:4000/products/rate/${id}`, review)
        dispatch({ type: 'REVIEW_PRODUCT', payload: data })
    } catch (error) {
        dispatch({ type: 'REVIEW_PRODUCT_FAIL', payload: error })
    }
}

export const commentProduct = (id, comment) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`http://localhost:4000/products/comment/${id}`, comment)
        dispatch({ type: 'COMMENT_PRODUCT', payload: data })
    } catch (error) {
        dispatch({ type: 'COMMENT_PRODUCT_FAIL', payload: error })
    }
}

export const repCommentProduct = (id, comment) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`http://localhost:4000/products/rep/comment/${id}`, comment)
        dispatch({ type: 'REP_COMMENT_PRODUCT', payload: data })
    } catch (error) {
        dispatch({ type: 'REP_COMMENT_PRODUCT_FAIL', payload: error })
    }
}

export const pinCommentProduct = (id, comment) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`http://localhost:4000/products/pin/comment/${id}`, comment)
        dispatch({ type: 'PIN_COMMENT_PRODUCT', payload: data })
    } catch (error) {
        dispatch({ type: 'PIN_COMMENT_PRODUCT_FAIL', payload: error })
    }
}

export const BlogProduct = (id, blog, callback) => async (dispatch, getState) => {
    const {
        getUsers: { userInfo },
    } = getState()
    try {
        const { data } = await axios.post(`http://localhost:4000/products/blog/${id}`, blog, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        })
        dispatch({ type: 'BLOG_PRODUCT', payload: data })
        callback()
    } catch (error) {
        dispatch({ type: 'BLOG_PRODUCT_FAIL', payload: error })
    }
}

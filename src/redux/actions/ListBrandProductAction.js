import axios from 'axios'
import { axiosClient } from '../../services/config.services'

export const getAllBrandProduct = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:4000/brandList')
        dispatch({ type: 'GET_ALL_BRAND_PRODUCT', payload: data })
    } catch (error) {}
}

export const CreateNewBrandProduct = (type) => async (dispatch) => {
    try {
        const { data } = await axios.post(`http://localhost:4000/brandList/create`, type)
        dispatch({ type: 'CREATE_NEW_BRAND_PRODUCT', payload: data })
    } catch (error) {}
}

export const deleteBrandProduct = (type) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`http://localhost:4000/brandList/delete/${type._id}`)
        dispatch({ type: 'DELETE_TYPE_PRODUCT', payload: data })
    } catch (error) {}
}

export const paginationBrandProduct = (page) => async (dispatch) => {
    try {
        console.log(page)
        const data = await axiosClient.get(`/brandList/pagination/${page}`)
        dispatch({ type: 'PAGINATION_BRAND', payload: data })
    } catch (error) {}
}

// export const descendingFilterProduct = (products) => async (dispatch, getState) => {
//     dispatch({ type: 'DESCENDING_FILTERPRODUCT', payload: products })
// }

// export const ascendingFilterProduct = (products) => async (dispatch, getState) => {
//     dispatch({ type: 'ASCENDING_FILTERPRODUCT', payload: products })
// }

export const searchBrands = (brand) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`http://localhost:4000/products/search/brand?brand=${brand}`)
        dispatch({ type: 'SEARCH_BRAND', payload: data })
    } catch (error) {
        dispatch({ type: 'SEARCH_BRAND_FAIL', payload: error.message })
    }
}

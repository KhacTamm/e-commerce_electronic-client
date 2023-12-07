import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { getAllUserReducer, UserSigninReducer, UserSignupReducer } from './reducers/UserReducer'
// import {
//     getAllProductReducer,
//     getProductByIdReducer,
//     searchProductReducer,
//     getProductByTypeReducer,
//     getFilterProductReducer,
//     paginationProductReducer,
//     ascendingProductReducer,
//     descendingProductReducer,
//     reviewProductReducer,
//     getAllTypeReducer,
// } from './reducers/ProductReducer'
import {
        getAllProductReducer,
        getProductByIdReducer,
        searchProductReducer,
} from './reducers/ProductReducer'

import { CartReducer } from './reducers/CartReducer'
import {
    addressReducer,
    getAllOrderReducer,
    getOrderByUserReducer,
    OrderInfoReducer,
    orderPayReducer,
} from './reducers/OrderReducer'
import { ChatReducer } from './reducers/ChatReducer'
// import { SelectListReducer, UpdateSelectListReducer } from './reducers/SelectListReducer'
import { ListTypeProductReducer, TypeProductReducer, searchTypeReducer } from './reducers/ListTypeProductReducer'
import { ListBrandProductReducer, BrandProductReducer, searchBrandReducer } from './reducers/ListBrandProductReducer'
import { InfoGhnReducer } from './reducers/GhnReducer'

const userInfoFromaLocalStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : undefined


const initialState = {
    userSignin: {
        userInfo: userInfoFromaLocalStorage,
    },
}

const reducer = combineReducers({
    getUsers: getAllUserReducer,
    // userSignin: UserSigninReducer,
    userSignup: UserSignupReducer,

    allProduct: getAllProductReducer,
    // filterProduct: getFilterProductReducer,
    getProductById: getProductByIdReducer,

    searchProduct: searchProductReducer,

    searchType: searchTypeReducer,
    allTypeProduct: ListTypeProductReducer,
    detailType: TypeProductReducer,

    // allTypeReducer: getAllTypeReducer,
    searchBrand: searchBrandReducer,
    allBrandProduct: ListBrandProductReducer,
    detailBrand: BrandProductReducer,

    cart: CartReducer,

    allOrder: getAllOrderReducer,
    address: addressReducer,
    
    orderByUser: getOrderByUserReducer,
    orderInfo: OrderInfoReducer,
    payOrder: orderPayReducer,

    orderGhn: InfoGhnReducer,

    chat: ChatReducer,

    // selectList: SelectListReducer,
    // updateSelect: UpdateSelectListReducer,

    // allTypeProduct: ListTypeProductReducer,
    // detailType: TypeProductReducer,

    // allBrandProduct: ListBrandProductReducer,
    // detailBrand: BrandProductReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
// const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store

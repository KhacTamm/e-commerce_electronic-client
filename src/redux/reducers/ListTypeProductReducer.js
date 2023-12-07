const initialState = {
    typeProduct: [],
    currentPage: 1,
}

export const ListTypeProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_TYPE_PRODUCT': {
            return { ...state, typeProduct: action.payload }
        }

        case 'EDIT_CURRENT_PAGE_TYPE': {
            return { ...state, currentPage: action.payload }
        }

        case 'PAGINATION_TYPE':
            return { ...state, typeProduct: action.payload }

        default:
            return state
    }
}

export const TypeProductReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_NEW_TYPE_PRODUCT': {
            return { ...state, typeProduct: action.payload }
        }
        default:
            return state
    }
}

export const searchTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_TYPE': {
            return { ...state, products: action.payload }
        }

        case 'ASCENDING_FILTERPRODUCT': {
            let newList = [...action.payload]
            newList = newList.sort((a, b) => b.salePrice - a.salePrice)
            return { ...state, products: newList }
        }

        case 'DESCENDING_FILTERPRODUCT': {
            let newList = [...action.payload]
            newList = newList.sort((a, b) => a.salePrice - b.salePrice)
            // console.log(state)

            return { ...state, products: newList }
        }

        case 'SEARCH_TYPE_FAIL': {
            return { ...state, error: action.payload }
        }

        default:
            return state
    }
}



// export const getAllTypeReducer = (state = {}, action) => {
//     switch (action.type) {
//         case 'FILTER_PRODUCT_BY_TYPE': {
//             return { ...state, products: action.payload }
//         }

//         case 'FILTER_PRODUCT_BY_TYPE_FAIL': {
//             return { ...state, error: action.payload }
//         }

//         default:
//             return state
//     }
// }

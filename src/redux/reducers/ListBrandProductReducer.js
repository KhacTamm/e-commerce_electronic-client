const initialState = {
    ListBrannd: [],
    currentPage: 1,
}

export const ListBrandProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_BRAND_PRODUCT': {
            return { ...state, ListBrannd: action.payload }
        }
        
        case 'EDIT_CURRENT_PAGE_BARND': {
            return { ...state, currentPage: action.payload }
        }

        case 'PAGINATION_BRAND':
            return { ...state, ListBrannd: action.payload }


        default:
            return state
    }
}

export const BrandProductReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_NEW_BRAND_PRODUCT': {
            return { ...state, brandProduct: action.payload }
        }

        case 'CREATE_NEW_TYPE_PRODUCT': {
            return { ...state, brandProduct: action.payload }
        }
        default:
            return state
    }
}

export const searchBrandReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_BRAND': {
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

        case 'SEARCH_BRAND_FAIL': {
            return { ...state, error: action.payload }
        }

        default:
            return state
    }
}

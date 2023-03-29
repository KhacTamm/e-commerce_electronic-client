const initialState = {
    cartItems: [],
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'ADD_TO_CART': {
        // let newList = [...state.cartItems]
        // const exists = newList.find((item) => item._id === action.payload._id)
        // if (exists) {
        //     newList = newList.map((item) =>
        //         item._id === action.payload._id ? { ...exists, qty: exists.qty + 1 } : item,
        //     )
        // } else {
        //     const product = {
        //         ...action.payload,
        //         qty: 1,
        //     }
        //     newList.push(product)
        // }
        // localStorage.setItem('cartItems', JSON.stringify(newList))
        // return {
        //     ...state,
        //     cartItems: newList,
        // }
        // }

        case 'GET_ALL_CART': {
            return {
                ...state,
                cartItems: action.payload,
            }
        }

        case 'DELETE_TO_CART': {
            return {
                ...state,
                cartItems: action.payload,
            }
            // let newList = [...state.cartItems]
            // const exists = newList.find((item) => item._id === action.payload._id)
            // if (exists.qty === 1) {
            //     newList = newList.filter((item) => item._id !== exists._id)
            // } else {
            //     newList = newList.map((item) =>
            //         item._id === action.payload._id ? { ...exists, qty: exists.qty - 1 } : item,
            //     )
            // }
            // localStorage.setItem('cartItems', JSON.stringify(newList))
            // return {
            //     ...state,
            //     cartItems: newList,
            // }
        }

        case 'DELETE_ALL_TO_CART': {
            // let newList = []
            // console.log(newList)
            // localStorage.setItem('cartItems', JSON.stringify(newList))
            let newList = []
            return {
                ...state,
                cartItems: newList,
            }
        }

        case 'DELETE_QTY_PRODUCT': {
            let newList = [...state.cartItems]

            newList = newList.filter((item) => item._id !== action.payload._id)

            localStorage.setItem('cartItems', JSON.stringify(newList))
            return {
                ...state,
                cartItems: newList,
            }
        }

        case 'CART_EMTY': {
            return { ...state, cartItems: [] }
        }
        default:
            return state
    }
}

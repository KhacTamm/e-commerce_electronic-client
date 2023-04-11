const initialState = {
    cartItems: [],
    quantity: 0
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

        case 'ADD_TO_CART': {
            return {
                ...state,
                quantity: state.quantity + action.payload
            }
        }

        case 'GET_ALL_CART': {
            const qty = action.payload
            let totalQty = 0 
            for( const i of action.payload){
                totalQty += i.qty
            }
            return {
                ...state,
                cartItems: action.payload,
                quantity: totalQty
            }
        }

        case 'DELETE_TO_CART': {
            const qty = action.payload
            let totalQty = 0 
            for( const i of action.payload){
                totalQty += i.qty
            }
            return {
                ...state,
                cartItems: action.payload,
                quantity: totalQty
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
                quantity: 0,
                cartItems: newList,
            }
        }

        // case 'DELETE_QTY_PRODUCT': {
        //     let newList = [...state.cartItems]

        //     newList = newList.filter((item) => item._id !== action.payload._id)

        //     localStorage.setItem('cartItems', JSON.stringify(newList))
        //     return {
        //         ...state,
        //         cartItems: newList,
        //     }
        // }
        case 'DECREASE_QTY_CART': {
            let newQty = state.quantity
            if(newQty > 0) {
                newQty--
            }
            return {
                ...state,
                quantity: newQty, 
            }
        }

        case 'INCREASE_QTY_CART': {
 
            return {
                ...state,
                quantity: state.quantity + 1, 
            }
        }

        case 'CART_EMTY': {
            return { 
                ...state,
                quantity: 0, 
                cartItems: [] 
            }
        }
        default:
            return state
    }
}

import { ADD_TO_CART, REMOVE_ITEM } from '../actions';

const initState = { 
    products: []    
}

export const cart = (state = initState, action) => {
    if (action.type === ADD_TO_CART){
        if (state.products.find(item => item.id === action.product.id)){
            return state;
        }

        return {
            ...state,
            products: state.products.concat(action.product)
        }
    };

    if (action.type === REMOVE_ITEM){
        if (state.products.find(item => item.id === action.product.id)){
            return{
                ...state,
                products: state.products.filter(item => item.id !== action.product.id)
            }
        }

        return state;
    };

    return state;
}
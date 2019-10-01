export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";


//add cart action
export const addToCart= product => {
    return{
        type: ADD_TO_CART,
        product
    }
}
//remove item action
export const removeItem= product =>{
    return{
        type: REMOVE_ITEM,
        product
    }
}
import { type as addCartProduct } from '../actions/addCartProduct'
import { type as deleteCartProduct } from '../actions/deleteCartProduct'


const defaultState = [
  
    // {
    //     "title": "Air Force 1  07 Prm 1fa20 Ww - Tenis De Hombre Lifestyle Mar",
    //     "img": "https://http2.mlstatic.com/D_NQ_NP_682052-MCO45045646742_032021-O.jpg",
    //     "price": "669.950",
    //     "discount": null
    // }
];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case addCartProduct:
            return [...state, payload];

        case deleteCartProduct:
            return [...state.filter(product => product !== payload)];

        default:
            return state;
    }
}

export default reducer;
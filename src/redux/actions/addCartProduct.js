export const type = 'addCartProduct';

const addCartProduct = product => {
    return {
        type,
        payload: product
    };
};

export default addCartProduct;
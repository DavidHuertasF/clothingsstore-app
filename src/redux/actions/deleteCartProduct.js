export const type = 'deleteCartProduct';

const deleteCartProduct = product => {
    return {
        type,
        payload: product
    };
};

export default deleteCartProduct;
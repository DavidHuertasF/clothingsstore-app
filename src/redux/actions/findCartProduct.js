export const type = 'findCartProduct';

const findCartProduct = id => {
    return {
        type,
        payload: id
    };
};

export default findCartProduct;
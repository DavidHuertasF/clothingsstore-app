import axios from "axios";

const getRandomInt = () => {
    const min = 0;
    const max = 1000;
    return Math.floor(Math.random() * (max - min)) + min;
}

const flattenProducts = products => {
    const flattenProducts = [];
    for (const product of products) {
        let productFlatten = {};
        productFlatten.title = product.title;
        productFlatten.img = `https://http2.mlstatic.com/D_NQ_NP_${product.thumbnail_id}-O.jpg`;
        productFlatten.price = product.price;
        // productFlatten.price = product.price;

        productFlatten.discount = null
        if (product.prices.prices) {
            for (const price of product.prices.prices) {
                if (price.type === 'promotion') {
                    productFlatten.price = product.price;
                    productFlatten.originalPrice = product.original_price;
                    productFlatten.originalPrice = new Intl.NumberFormat().format(productFlatten.originalPrice);
                }
            }
        }


        if (product.original_price)
            productFlatten.discount = Math.round(100 - ((product.price * 100) / product.original_price));

        flattenProducts.push(productFlatten);
        productFlatten.price = new Intl.NumberFormat().format(productFlatten.price);
    }
    return flattenProducts;
}

const mercadoLibreService = {

    getRandomProducts: () => {
        return axios.get(`https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&limit=10&offset=${getRandomInt()}`)
            .then((res) => {
                const { results } = res.data;
                console.log(res.data.results);
                return flattenProducts(results);
            })
            .catch((err) => {
                console.error(err);
            })
    },

    getProductsByName: name => {
        return axios.get(`https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&q=${name}`)
            .then((res) => {
                const { results } = res.data;
                console.log(res.data.results);
                return flattenProducts(results);
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export default mercadoLibreService;
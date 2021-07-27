import './Cart.scss'
// import ProductCard from '../../../assets/ProductCard/ProductCard';
import { connect } from 'react-redux';
import ProductCard from '../../../assets/ProductCard/ProductCard';
import deleteCartProduct from '../../../redux/actions/deleteCartProduct'
import { useEffect, useState } from 'react';

const Cart = ({ shoppingCart, addTocart, products, deleteCartProduct }) => {

    const [productsCart, setProductsCart] = useState(products);

    useEffect(() => {
        setProductsCart(products);
    }, [products])

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const deleteProduct = product => {
        deleteCartProduct(product);
        setProductsCart(products);
    }


    return (
        <div className="cart_container">
            <p className='title'>Carrito de compras ({productsCart.length} elementos)</p>
            {productsCart.map((product, idx) =>
                <div key={idx}>
                    <ProductCard
                        {...product}
                        cart='cart'
                        func={() => { deleteProduct(product) }}
                    />
                </div>
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    products: state.cartProducts,
});

const mapDispatchToProps = {
    deleteCartProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


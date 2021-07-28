import ProductCard from '../../../../assets/ProductCard/ProductCard';
import SearchMessage from '../SearchMessage/SearchMessage';
import './Products.scss'
import { connect } from 'react-redux';
import addCartProduct from '../../../../redux/actions/addCartProduct'

const Products = ({ products, loading, name, totalPosts, addCartProduct }) => {

    const addProduct = product => {
        addCartProduct(product);
    }

    if (loading) {
        return (
            <SearchMessage />
        );
    } else if (!totalPosts) {
        return (
            <SearchMessage
                message={`No hay resultados para ${name}`}
            />
        );
    }
    return (
        <>
            <div className='title_products' >
                <p className='title'>{name}</p>
                <p className="results">{totalPosts} resultados</p>
            </div>
            <div className='products_container'>
                {products.map((product, idx) =>
                    <ProductCard
                        key={idx}
                        {...product}
                        func={() => { addProduct(product) }}
                    />
                )}
            </div>
        </>
    )
}

const mapDispatchToProps = {
    addCartProduct,
}

export default connect(null, mapDispatchToProps)(Products);
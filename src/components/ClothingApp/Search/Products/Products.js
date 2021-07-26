import ProductCard from '../../../../assets/ProductCard/ProductCard';
import './Products.scss'

const Products = ({products, loading, name, totalPosts}) => {
    
    if(loading){
        return (
            <h2>Loading...</h2>
        );
    }
    
    
    return(
        <>
        <div className='title_products' >
            <p className='title'>{name}</p>
            <p className="results">{totalPosts} resultados</p>
        </div>
        <div className='products_container'>
         {products.map((product, idx) =>
                <ProductCard
                    {...product}
                />
            )}
        </div>
        </>
    )
}

export default Products;
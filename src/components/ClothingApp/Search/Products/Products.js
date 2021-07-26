import ProductCard from '../../../../assets/ProductCard/ProductCard';
import SearchMessage from '../SearchMessage/SearchMessage';
import './Products.scss'

const Products = ({products, loading, name, totalPosts}) => {
    
    if(loading){
        return (
            <SearchMessage />
        );
    }else if(!totalPosts){
        return (
            <SearchMessage
                message = {`No hay resultados para ${name}`}
             />
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
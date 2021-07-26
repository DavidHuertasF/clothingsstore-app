const ProductCard = ({img, title, price, originalPrice,discount }) => {
    return (
        <div className='product_container'>
            <img className='product_img' src={img} alt="" />
            <div className='product-description_div'>
                <p className='product-title'>{title}</p>
                <div className='product-prices_div'>
                    <p className='product-price'>${price}</p>
                    {
                        discount ?
                            <>
                                {/* <div>{product.discount}</div> */}
                                <p className='product-original-price'>
                                    {`$${originalPrice}`}
                                </p>
                                <p className='product-discount'>
                                    {`- ${discount}%`}

                                </p>
                            </>
                            : null
                    }
                </div>

                <div className="principal-dark__button add-cart_button">
                    <img src="https://drive.google.com/uc?id=17ByO510HDOzVzrnwEVT2ZofvO_u3891c" alt="" />
                    <p>Agregar al carrito</p>
                </div>

            </div>
        </div>

    );

}

export default ProductCard;
// import mercadoLibreService from '../services/'
import { useState, useEffect } from 'react';
import mercadoLibreService from '../../../../services/mercadol-service';
import Slider from "react-slick";
import ProductCard from "../../../../assets/ProductCard/ProductCard";
import { connect } from 'react-redux';
import addCartProduct from '../../../../redux/actions/addCartProduct'

import './FeaturedProducts.scss'

const SamplePrevArrow = props => {
    const { onClick } = props;
    return (
        <img className='row row-left fa fa-caret-left' onClick={onClick} src="https://drive.google.com/uc?id=13J0GjOV_HVjIzjrzw5d74FNIqiHbiS9B" alt="" />
        // <p onClick={onClick}> anterior </p>
    );
}

const SampleNextArrow = props => {
    const { onClick } = props;
    return (
        //  <i className='row row-right fa fa-caret-right' onClick={onClick}>despues</i>
        <img className='row row-right fa fa-caret-right' onClick={onClick} src="https://drive.google.com/uc?id=15DANbfPKFKNAJ68s9ifZKtFRmw5OXXyb" alt="" />

    );
}

const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    focusOnSelect: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Featuredproducts = ({addCartProduct}) => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        mercadoLibreService.getRandomProducts().then(apiProducts => setFeaturedProducts((apiProducts))); // actualiza la lista de ids
    }, []);

    const addProduct = product => {
        addCartProduct(product);
    }
    return (
        // <p></p>
        <div className='featured-product_container'>

            <p className='title'>PRODUCTOS MÁS BUSCADOS</p>
            <Slider {...settings}>
                {/* {JSON.stringify(planeData)} */}
                {featuredProducts.map((product, idx) =>
                    <ProductCard
                        {...product}
                        func = {() => {addProduct(product)}}
                    />
                )}
            </Slider>
        </div>
    )
}

const mapDispatchToProps = {
    addCartProduct,
}

export default connect(null, mapDispatchToProps)(Featuredproducts);

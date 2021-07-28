import Carosuel from "../Home/Carousel/Carousel";
import Featuredproducts from "./FeaturedProducts/Featuredproducts";
import './Home.scss'

const Home = () => {
    return (
        <div className='home_container'>
            <Carosuel />
            <div className='featured-categories_container'>
                <div className="categorie_div" >
                    <img src="https://drive.google.com/uc?id=1-HbR_6id38xkkaMOKNKEvNa9Dfd3WBN_" alt="" />
                    <p>MODA INFANTIL</p>
                </div>
                <div className="categorie_div">
                    <img src="https://drive.google.com/uc?id=1rJeGvgiSruroDgqQWC7QnmTEqTxLlAnk" alt="" />
                    <p>PROTECCIÓN</p>
                </div>
            </div>
            <Featuredproducts />

        </div>
    )
}

export default Home;
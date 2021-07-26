import { useParams } from 'react-router-dom';
import mercadoLibreService from '../../../services/mercadol-service'
import { useState, useEffect } from 'react';
import axios from "axios";


import './Search.scss'
import Products from './Products/Products';
import Pagination from './Pagination/Pagination';


const Search = () => {
    
    const [findedProducts, setFindedProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const { name } = useParams();

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await mercadoLibreService.getProductsByName(name);
            setFindedProducts(res);
            setLoading(false);
        }
        fetchPosts();
    }, [name]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentProducts = findedProducts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='search_container'>
            {/* {name} */}
            <Products
                products={currentProducts}
                loading={loading}
                name={name}
                totalPosts={Object.keys(findedProducts).length}
            />
            <Pagination
                totalPosts={Object.keys(findedProducts).length}
                paginate = {paginate}
                postPerPage={postsPerPage}
            />
        </div>
    )
}

export default Search;
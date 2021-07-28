import { useState } from 'react';
import './Pagination.scss'

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {

    const [pageSelected, setPageSelected] = useState(1);

    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination_container' >
            <p className='title'>Pág</p>
            {pageNumbers.map(number => (
                <div
                    onClick={() => paginate(number)}
                    key={number}
                    className={
                        currentPage === number ? 'page-item active_page' : 'page-item'
                    }
                >
                    {number}
                </div>
            ))}
        </div>
    );
}

export default Pagination;
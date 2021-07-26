import './Pagination.scss'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div className='pagination_container' >
            <p className='title'>Pág</p>
            {pageNumbers.map(number => (
                <div onClick={() => paginate(number)} key={number} className='page-item'>
                        {number}
                </div>
            ))}
        </div>
    );
}

export default Pagination;
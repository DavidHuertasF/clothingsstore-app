import './SearchMessage.scss'

const SearchMessage = ({message}) => {
    return (
        <div className="search-message_container">
            <img src="https://cdn.dribbble.com/users/1785190/screenshots/3906047/search.gif" alt="" />

            <p>{message}</p>
        </div>
    )
}

export default SearchMessage;
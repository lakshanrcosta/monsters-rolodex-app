import PropTypes from 'prop-types';
import './search-box.styles.css';

const SearchBox = ({ placeholder, className, onChangeHandler }) => {
  return (
    <>
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default SearchBox;

import { Component } from 'react';
import PropTypes from 'prop-types';
import './search-box.styles.css';

class SearchBox extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props.className);
    return (
      <>
        <input
          className={`search-box ${this.props.className}`}
          type='search'
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </>
    );
  }
}

SearchBox.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default SearchBox;

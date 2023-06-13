import { Component } from 'react';
import PropTypes from 'prop-types';
import './card.styles.css';

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    const { id, name, email } = this.props;
    return (
      <div className={'card-container'}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Card;

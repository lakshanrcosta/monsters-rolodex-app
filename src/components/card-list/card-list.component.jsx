import { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    const { monsters, searchText } = this.props;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText);
    });

    return (
      <div className={'card-list'}>
        {filteredMonsters.map((monster) => {
          const { id, name, email } = monster;
          return <Card key={id} id={id} name={name} email={email} />;
        })}
      </div>
    );
  }
}

CardList.propTypes = {
  monsters: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired
};

export default CardList;

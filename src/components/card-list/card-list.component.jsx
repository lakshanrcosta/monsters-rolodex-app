import Card from '../card/card.component';
import './card-list.styles.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CardList = ({ monsters, searchText }) => {
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const updateFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText);
    });

    setFilteredMonsters(updateFilteredMonsters);
  }, [monsters, searchText]);

  return (
    <div className={'card-list'}>
      {filteredMonsters.map((monster) => {
        const { id, name, email } = monster;
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
};

CardList.propTypes = {
  monsters: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired
};

export default CardList;

import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChangeText = (event) => {
    const searchText = event.target.value.toLowerCase();
    setSearchField(searchText);
  };

  return (
    <div className='App'>
      <h1 className={'app-title'}>Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChangeText}
        placeholder={'Search Monster'}
        className={'monsters-search-box'}
      />
      <CardList monsters={monsters} searchText={searchField} />
    </div>
  );
};

export default App;

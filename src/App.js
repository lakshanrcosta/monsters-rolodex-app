import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: ''
    };
  }

  onSearchChangeText = (event) => {
    const searchText = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchText };
    });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    const { monsters, searchText } = this.state;
    const { onSearchChangeText } = this;

    return (
      <div className='App'>
        <h1 className={'app-title'}>Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChangeText}
          placeholder={'Search Monster'}
          className={'monsters-search-box'}
        />
        <CardList monsters={monsters} searchText={searchText} />
      </div>
    );
  }
}

export default App;

import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: '',
    };
  }

  onSearchHandler = (event) => {
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
        }),
      );
  }

  render() {
    const { monsters, searchText } = this.state;
    const { onSearchHandler } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText);
    });

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search monsters'
          onChange={onSearchHandler}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

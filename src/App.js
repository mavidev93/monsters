import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/searchbox/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [

      ],
      searchField: ''
    }


  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>
        response.json())
      //.then(res => console.log(res))
      .then(users => this.setState({ monsters: users }))
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;

    const filterdMonesters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())

    )
    return (

      <div className='App'>
        <h1>Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterdMonesters} />



      </div>
    );
  }

}
export default App;

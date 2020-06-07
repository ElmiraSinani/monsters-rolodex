import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this); //using this if function is not a arrow function
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render(){

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monster...'
          handleChange={ this.handleChange } 
        />
        <CardList monsters={filteredMonsters} />       
      </div>
    );
  }
}

export default App;

/*
//using second param on setState to get last changes
<input type='search' 
        placeholder='Search Monster...' 
        onChange={ e => {
              this.setState({ searchField: e.target.value }, ()=>console.log(this.state))              
        }} />

<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>{ this.state.myString }</p>
    <button onClick={ ()=> this.setState({myString: "How are you?"})} >Click me</button>
  </header>*/

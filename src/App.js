import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';

class App extends Component {
  constructor() {
    super();
    this.state={
      Monsters:[],
      SearchField:''
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(monsterjson=>this.setState({Monsters:monsterjson}))
  ;

}
//searchfunc(e){
//  this.setState({SearchField:e.target.value},()=>console.log(this.state.SearchField))
//}
   handleChange =(e) =>{this.setState({SearchField:e.target.value})}
  render(){
    const{Monsters, SearchField} =this.state;
    const FilteredMonsters= Monsters.filter(monster=> monster.name.toLowerCase().includes(SearchField.toLowerCase()));
  return (
    <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}/>
        <CardList monsters={FilteredMonsters}>
          
          </CardList>
    </div>
  );
  }
}

export default App;

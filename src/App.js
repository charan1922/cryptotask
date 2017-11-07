import React, { Component } from 'react';
import Projects from './Components/Projects';
import axios from 'axios';
import './App.css';
//import uuid from 'uuid';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    cryptos:[]
  }
}

componentWillMount() {
  axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=5')
  .then(res => {
    const cryptos = res.data;
    console.log(cryptos);
    this.setState({cryptos: cryptos});
  })
}

  render() {
    return (
      <div className="App">
     
<table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>    
        </tr>
      </thead>
     
      <tbody>
      
        <Projects cProjects={this.state.cryptos} />   
       
      </tbody>
           
      </table>
       </div>
   );
  }
}

export default App;

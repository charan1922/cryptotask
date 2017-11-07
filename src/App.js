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

{/* <div class="dropdown Name">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> All
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="{todo}">Top 100</a></li>
    <li><a href="#">Full List</a></li>
    
  </ul>
</div> */}


     <div class="dropdown price">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> USD
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">BTC</a></li>
    <li><a href="#">ETH</a></li>
    <li><a href="#">AUD</a></li>
  </ul>
</div>


<table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>    
        </tr>
      </thead>
      </table>

      <Projects cProjects={this.state.cryptos} /> 
           
      
       </div>
   );
  }
}

export default App;

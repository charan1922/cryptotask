import React, { Component } from 'react';
import Projects from './Components/Projects';
import axios from 'axios';
import './App.css';
import Price from './Components/Price'

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    cryptos:[],url:'https://api.coinmarketcap.com/v1/ticker/?limit=10'
  }
}


//componentWillMount() { this.loadFeed.bind(this); }

componentDidMount(){
  this.loadFeed();
  }


handleINR(){

  this.setState({url:'https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=10'});

   setTimeout(this.loadFeed.bind(this), 500);

}


handleETH(){
  
    this.setState({url:'https://api.coinmarketcap.com/v1/ticker/?convert=ETH&limit=10'});
  
     setTimeout(this.loadFeed.bind(this), 500);
  
  }


handleAUD(){
  
    this.setState({url:'https://api.coinmarketcap.com/v1/ticker/?convert=AUD&limit=10'});
  
     setTimeout(this.loadFeed.bind(this), 500);
  
  }



loadFeed(){
  console.log('getting feed data');
  axios.get(this.state.url)
  .then(res => {
    let cryptos = res.data;
    console.log(cryptos);
    this.setState({cryptos: cryptos});
  })
}




  render() {
    return (  
      <div className="App">
<h1> Crypto Market Open API </h1>

<Price  onINR={this.handleINR.bind(this)} onETH={this.handleETH.bind(this)} onAUD={this.handleAUD.bind(this)}/>

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

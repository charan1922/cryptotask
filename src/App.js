import React, { Component } from 'react';
import Projects from './Components/Projects';
import axios from 'axios';
import './App.css';
import Price from './Components/Price'

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    cryptos:[],
    url:'https://api.coinmarketcap.com/v1/ticker/?limit=10',
    selectedCurrency: 'USD'
  }
}

componentDidMount(){
  this.loadFeed();
  }

  componentwillUnMount(){
    this.loadFeed();
    }

handleINR(){

  this.setState({
    url:'https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=10',
    selectedCurrency: 'INR'
  });

   setTimeout(this.loadFeed.bind(this), 500);

}


handleETH(){
  
    this.setState({
      url:'https://api.coinmarketcap.com/v1/ticker/?convert=ETH&limit=10',
      selectedCurrency: 'ETH'
    });
  
     setTimeout(this.loadFeed.bind(this), 500);
  
  }


handleAUD(){
  
    this.setState({
      url:'https://api.coinmarketcap.com/v1/ticker/?convert=AUD&limit=10',
      selectedCurrency: 'AUD'
    });
  
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
<Price  
  onINR={this.handleINR.bind(this)} 
  onETH={this.handleETH.bind(this)} 
  onAUD={this.handleAUD.bind(this)}
  currency={this.state.selectedCurrency} />

<br/>
      <div  id="App-container">
       <span className="left"> Name </span>
      
        <span className="right" >Price </span>
       
         </div>

      <Projects cProjects={this.state.cryptos} /> 
           
      
       </div>
   );
  }
}

export default App;

import React, { Component } from 'react';
//import './App.css';
import axios from 'axios';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    crypto:[]
  }
}

componentDidMount() {
  axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
  .then((res)=> {
    const crypto = res.data;
    this.setState({crypto:crypto[0]})
    console.log(crypto)
  } )


}

  render() {
    return (
      <div className="App">
        <div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div>

<p class="bg-primary">This text is important.</p>
  <p class="bg-success">This text indicates success.</p>
  <p class="bg-info">This text represents some information.</p>
  <p class="bg-warning">This text represents a warning.</p>
  <p class="bg-danger">This text represents danger.</p>
      </div>
    );
  }
}

export default App;

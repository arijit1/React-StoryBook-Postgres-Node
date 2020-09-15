import React, { Component } from "react";

class Apptest extends Component {
  constructor() {
    super();
    this.state = {
      rate: 8
    }
    this.getData = this.getData.bind(this);
    //this.getData_GETREQUEST = this.getData_GETREQUEST.bind(this);
    // "https://api.coindesk.com/v1/bpi/currentprice.json"
  }

  getData_GETREQUEST = async () => {

    console.log("here");

    await axios.get("https://www.google.com").then(res => {

      console.log("state", res);

      this.setState({ rate: res.data.bank.inr.rate });

    }).catch(err => { console.log("ERROR:: ", err); });
  }

  getData() {
    console.log('get data');
  }

  render() {
    return (
      <div className="App">
        <button className="btn" onClick={this.getData}>
          Get Data
        </button>
        <button className="get_btn" onClick={this.getData_GETREQUEST}>
          Get Data reqest
        </button>
        <h1>{this.state.rate}</h1>
        <h1>{this.state.rate}</h1>
      </div>
    );
  }
}
export default Apptest;
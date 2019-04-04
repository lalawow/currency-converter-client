import React, { Component } from 'react';
import './App.css';

import { fx } from './util/CurrencyData'
// delete simple converter(2 currencies converter) function
//import SimpleConverter from './components/SimpleConverter/SimpleConverter'
import ComplexConverter from './components/ComplexConverter/ComplexConverter'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      simple_converter_info: {
        amount: 1,
        from: "USD",
        to: "USD",
      }
    }
    this.handleSCUpdate = this.handleSCUpdate.bind(this)
  }
  componentWillMount() {
    const _self = this
    function checkDataNew() {
      if (fx.new) {
        console.log("ok update")
        _self.forceUpdate()
      } else {
        setTimeout(() => { checkDataNew() }, 500)
      }
    }

    checkDataNew()
  }

  handleSCUpdate(info) {
    this.setState({ simple_converter_info: info })

  }
  render() {
    // delete simple converter(2 currencies converter) function
    //const SC_info = this.state.simple_converter_info
    return (
      <div className="App">
        <h1 style={{ color: "#ffd666", padding: "40px 0 30px 0", fontSize: 32 }}>Currency Converter</h1>
        {/* delete simple converter(2 currencies converter) function */}
        {/* <SimpleConverter info={SC_info} onUpdate={this.handleSCUpdate} result={fx(SC_info.amount).from(SC_info.from).to(SC_info.to)} /> */}
        <ComplexConverter fx={fx} />
      </div>
    );
  }
}

export default App;

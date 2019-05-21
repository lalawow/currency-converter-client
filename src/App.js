import React, { Component } from 'react';
import './App.css';

import { fx } from './util/CurrencyData'
// delete simple converter(2 currencies converter) function
//import SimpleConverter from './components/SimpleConverter/SimpleConverter'
import ComplexConverter from './components/ComplexConverter/ComplexConverter'
import { connect } from "react-redux";
import { setStatus } from "@/store/actions";


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
      ; (function checkDataNew() {
        if (fx.new) {
          // console.log("ok update")
          // console.log("new fx", fx)
          _self.forceUpdate()
          _self.props.setStatus()
        } else {
          setTimeout(() => { checkDataNew() }, 500)
        }
      })()
  }

  handleSCUpdate(info) {
    this.setState({ simple_converter_info: info })

  }
  render() {
    // delete simple converter(2 currencies converter) function
    //const SC_info = this.state.simple_converter_info
    const dates = new Date(fx.timestamp * 1000)
    return (
      <div className="App">
        <div className="title-frame">
          <h1 className="title">Currency Converter</h1>
          Currency date: {dates.getFullYear() + '-' + (dates.getMonth() + 1) + '-' + dates.getDate()}
        </div>
        {/* delete simple converter(2 currencies converter) function */}
        {/* <SimpleConverter info={SC_info} onUpdate={this.handleSCUpdate} result={fx(SC_info.amount).from(SC_info.from).to(SC_info.to)} /> */}
        <ComplexConverter fx={fx} />
      </div>
    );
  }
}



export default connect(
  null,
  { setStatus }
)(App);

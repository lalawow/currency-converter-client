import React, { Component } from 'react'
import styled from "styled-components"
import { Button } from "antd"
import Selector from "../../components/currency-selector"

export default class extends React.PureComponent {
  state = {
    selectorVisible: false,
    selected: ""
  }
  handleOpenSelector = () => {
    this.setState({ selectorVisible: true, selected: "" })
  }

  handleCloseSelector = () => {
    this.setState({ selectorVisible: false })
  }

  handleChange = value => {
    this.setState({ selected: value })
  }

  handleAddCurrency = () => {
    this.handleCloseSelector()
    this.props.add(this.state.selected)
  }
  render() {
    const { selectorVisible } = this.state
    const { list } = this.props
    return (
      <Adder>
        {!selectorVisible && <Button type="primary" icon="plus" onClick={this.handleOpenSelector} />}
        {selectorVisible && (<div className="selector-frame">
          <Selector onChange={this.handleChange} className="add-selector" />
          <Button type="primary" icon="plus" onClick={this.handleAddCurrency} /><Button type="primary" icon="close" onClick={this.handleCloseSelector} /></div>)}
      </Adder>)
  }
}

const Adder = styled.div`
display: flex;
justify-content:center;

.selector-frame{
  display:flex;

  .ant-select-selection {width:200px;}
}
`;

import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import "./SimpleConverter.css"
import CurrencySelector from '../util/CurrencySelector'
import InputAmount from '../util/InputAmount'
import { CurrencyDict } from '../../util/CurrencyList'


export default class SimpleConverter extends Component {
    constructor(props) {
        super(props)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.swap = this.swap.bind(this)
    }
    handleUpdate(no, value) {
        let updateInfo = this.props.info
        updateInfo[no] = value
        this.props.onUpdate(updateInfo)
    }
    swap() {
        let updateInfo = Object.assign({}, this.props.info)
        updateInfo.from = this.props.info.to
        updateInfo.to = this.props.info.from
        this.props.onUpdate(updateInfo)
    }
    render() {
        return (
            <div className="simple-converter">
                <Row>
                    <Col span={4}><CurrencySelector currency={this.props.info.from} no={"from"} onUpdate={this.handleUpdate} /></Col>
                    <Col span={5}><InputAmount no="amount" amount={this.props.info.amount} onUpdate={this.handleUpdate} currency={this.props.info.from} /></Col>
                    <Col span={6}><Button type="primary" icon="swap" onClick={this.swap} /></Col>
                    <Col span={4}><CurrencySelector currency={this.props.info.to} no={"to"} onUpdate={this.handleUpdate} /></Col>
                    <Col span={5} style={{ lineHeight: "32px", color: "#eee" }}>{CurrencyDict[this.props.info.to].currencySymbol}{this.props.result.toFixed(4)}</Col>
                </Row>
            </div>
        )
    }
}
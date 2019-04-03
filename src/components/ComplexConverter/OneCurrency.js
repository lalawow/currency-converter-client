import React, { Component } from 'react'
import "./ComplexConverter.css"
import { Row, Col, Button, Icon } from 'antd';
import CurrencySelector from '../util/CurrencySelector'
import InputAmount from '../util/InputAmount'

export default class OneCurrency extends Component {
    change = (no, value) => {
        this.props.onUpdate(no, this.props.currency, value)
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    removeCurrency = () => {
        this.change("remove", 0)
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}><CurrencySelector currency={this.props.currency} no="newCurrency" onUpdate={this.change} complex={true} /></Col>
                    <Col span={6}><InputAmount no="newAmount" amount={this.props.amount} onUpdate={this.change} currency={this.props.currency} /></Col>
                    <Col span={6}><Icon type="delete" theme="filled" className="currency-btn" onClick={this.removeCurrency} /></Col>
                </Row>
            </div>
        )
    }
}



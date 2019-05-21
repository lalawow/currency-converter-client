import React, { Component } from 'react'
import "./ComplexConverter.css"
import { Row, Col, Icon } from 'antd';
import CurrencySelector from '../util/CurrencySelector'
import InputAmount from '../util/InputAmount'

export default class OneCurrency extends Component {
    change = (no, value) => {
        this.props.onUpdate(no, this.props.currency, value)
    }
    removeCurrency = () => {
        this.change("remove", 0)
    }
    render() {
        return (
            <div className="one-currency">
                <Row justify="center" type="flex">
                    <Col className="currency-amount-col"><InputAmount no="newAmount" amount={this.props.amount} onUpdate={this.change} currency={this.props.currency} /></Col>
                    <Col className="currency-selector-col"><CurrencySelector currency={this.props.currency} no="newCurrency" onUpdate={this.change} complex={true} /></Col>

                    <Col className="currency-action-btn"><Icon type="delete" theme="filled" className="currency-btn" onClick={this.removeCurrency} /></Col>
                </Row>
            </div>
        )
    }
}



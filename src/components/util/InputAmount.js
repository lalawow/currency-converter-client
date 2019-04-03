import React, { Component } from 'react'
import { InputNumber } from 'antd';
import { CurrencyDict } from '../../util/CurrencyList'

export default class InputAmount extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onFocus = false
        this.count = 0
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.onFocus) {
            this.onFocus = false
            return false
        }
        this.count++
        return true
    }
    onChange(value) {
        if (typeof (value) === "number") this.props.onUpdate(this.props.no, value)
        this.onFocus = true
    }
    render() {
        const symbol = CurrencyDict[this.props.currency].currencySymbol
        return (
            <div style={{
                color: "#eee"
            }}>
                {symbol} < InputNumber
                    defaultValue={this.props.amount}
                    formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={this.onChange} key={this.count}
                />
            </div >
        )
    }
}
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Select, { components } from 'react-select'
import { CurrencyList } from '../../util/CurrencyList'

const Options = CurrencyList.map(currency => ({
    value: currency.id,
    label: currency.id + "      " + currency.currencyName
}))

const selectStyle = {
    control: (provided, state) => {
        const minHeight = "32px !important"
        return { ...provided, minHeight }
    }
}

const SingleValue = ({ children, ...props }) => {
    return (
        <components.SingleValue {...props}>
            {props.data.value}
        </components.SingleValue>
    );
}

export default class CurrencySelector extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(data) {
        this.props.onUpdate(this.props.no, data.value)
    }
    render() {
        return (
            <Select
                defaultValue={{ value: this.props.currency }}
                placeholder={this.props.currency}
                options={Options}
                components={{ SingleValue }}
                onChange={this.handleChange}
                styles={selectStyle}
                className="currency-selector"
                classNamePrefix="currency-selector"
                key={this.props.currency + "-selector"}
            />
        )
    }
}

CurrencySelector.propTypes = {
    currency: PropTypes.string,
    no: PropTypes.string,
    onUpdate: PropTypes.func
}
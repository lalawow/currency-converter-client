import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Select, { components } from 'react-select'
import { CurrencyList } from '../../util/CurrencyList'
import { connect } from "react-redux";
import { getCurrenciesOptions, getCurrencyLabel } from "@/store/selectors";

// const Options = CurrencyList.map(currency => ({
//     value: currency.id,
//     label: currency.id + "      " + currency.currencyName
// }))

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

class CurrencySelector extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(data) {
        this.props.onUpdate(this.props.no, data.value)
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.complex && (nextProps.currencyLabel !== this.props.currencyLabel)) {
            this.forceUpdate()
        }
    }
    render() {
        const Options = (this.props.complex ? this.props.complexOptionList : CurrencyList).map(currency => ({
            value: currency.id,
            label: currency.id + "      " + currency.currencyName
        }))
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

function mapStateToProps(state) {
    return {
        complexOptionList: getCurrenciesOptions(state),
        currencyLabel: getCurrencyLabel(state)
    }
}

CurrencySelector.propTypes = {
    currency: PropTypes.string,
    no: PropTypes.string,
    onUpdate: PropTypes.func,
    complex: PropTypes.bool
}

export default connect(
    mapStateToProps,
    {}
)(CurrencySelector);
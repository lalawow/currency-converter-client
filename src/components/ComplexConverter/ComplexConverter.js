import React, { Component } from 'react'
import CurrencySelector from '../util/CurrencySelector'
import OneCurrency from './OneCurrency'
//import { CurrencyList, CurrencyDict } from '../../util/CurrencyList'
import { Row, Col, Button } from 'antd';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { setCurrency } from "@/store/actions";
import { getStatus } from "@/store/selectors";



// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

class ComplexConverter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            convertList: [],
            base: "",
            amount: 1,
            addAction: false
        }
        this.info = {
            newCurrency: ""
        }


    }
    componentWillMount() {
        const localInfo = localStorage.getItem('data')
        if (localInfo) {
            this.setState(JSON.parse(localInfo))
            this.props.setCurrency(JSON.parse(localInfo).convertList)
        } else {
            localStorage.setItem('data', JSON.stringify({ convertList: [] }))
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status) {
            setTimeout(() => { this.setState({ amount: this.state.amount }) }, 0)
        }
    }

    handleUpdate = (action, currency, value) => {
        // console.log(action, currency, value)
        if (action === "newCurrency" && this.state.convertList.indexOf(value) === -1) {
            let updateInfo = this.state.convertList.slice()
            const index = this.state.convertList.indexOf(currency)
            updateInfo[index] = value
            this.setState({ convertList: updateInfo })
            this.setConvertListLocal({ convertList: updateInfo })
            this.props.setCurrency(updateInfo)
            if (this.state.base === currency) {
                this.setState({ base: value })
                this.setConvertListLocal({ base: value })
            }
        }
        if (action === "newAmount") {
            const updateInfo = {
                base: currency,
                amount: value
            }
            this.setState(updateInfo)
            this.setConvertListLocal(updateInfo)
        }
        if (action === "remove") {
            let convertList = this.state.convertList.slice()
            const index = convertList.indexOf(currency)
            convertList.splice(index, 1)
            let updateInfo = { convertList }
            if (currency === this.state.base) {
                updateInfo.base = convertList[0]
                updateInfo.amount = this.props.fx(this.state.amount).from(currency).to(convertList[0]).toFixed(4)
            }
            this.setState(updateInfo)
            this.setConvertListLocal(updateInfo)
            this.props.setCurrency(updateInfo.convertList)
        }

    }
    changeNewCurrency = (no, value) => {
        this.info.newCurrency = value
    }
    addNewCurrency = () => {
        if (this.info.newCurrency !== '' && this.state.convertList.indexOf(this.info.newCurrency) === -1) {
            let newList = this.state.convertList.slice()
            newList.push(this.info.newCurrency)
            let updateInfo = { convertList: newList }
            if (newList.length === 1) updateInfo = { base: this.info.newCurrency, convertList: [this.info.newCurrency] }
            this.setState(updateInfo)
            this.toggleAddAction()
            this.setConvertListLocal(updateInfo)
            this.props.setCurrency(updateInfo.convertList)
        }
    }
    toggleAddAction = () => {
        const toggle = this.state.addAction
        this.setState({ addAction: !toggle })
    }
    setConvertListLocal = (value) => {
        let newInfo = JSON.parse(localStorage.getItem('data'))
        newInfo = Object.assign(newInfo, value)
        localStorage.setItem('data', JSON.stringify(newInfo))
    }


    onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.convertList,
            result.source.index,
            result.destination.index
        );

        this.setState({
            convertList: items
        });
        this.props.setCurrency(items)
        this.setConvertListLocal({
            convertList: items
        })
    }

    render() {
        const fx = this.props.fx
        const base = this.state.base
        const amount = this.state.amount
        //console.log(this.state)
        return (
            <div className="complex-converter">
                <div className="complex-converter-frame">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {
                                        this.state.convertList.map((currency, index) => (
                                            <Draggable key={currency} draggableId={currency} index={index} className="draggable-currency">
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}

                                                    >
                                                        <OneCurrency currency={currency} amount={fx(amount).from(base).to(currency).toFixed(4)} onUpdate={this.handleUpdate} key={currency} index={index} />
                                                    </div>
                                                )}
                                            </Draggable>

                                        ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>

                    {   /* 添加新汇率选项  */
                        this.state.addAction ? (<Row><Col><CurrencySelector currency={this.info.newCurrency} no="add" onUpdate={this.changeNewCurrency} complex={true} /></Col>
                            <Col><Button type="primary" icon="close" onClick={this.toggleAddAction}></Button><Button type="primary" icon="check" onClick={this.addNewCurrency}></Button></Col></Row>) :
                            (<Col><Button type="primary" icon="plus" onClick={this.toggleAddAction}></Button></Col>)
                    }
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        status: getStatus(state)
    }
}
export default connect(
    mapStateToProps,
    { setCurrency }
)(ComplexConverter);
import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incNumber, decNumber, changeStepValue } from './CounterActions'

class Counter extends Component {

    render() {
        const { 
            number, step, 
            incNumber, decNumber,
            changeStepValue
        } = this.props

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Step</td>
                            <td><input type="text" value={step} onChange={changeStepValue} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={incNumber}>Inc</button>
                                <button onClick={decNumber}>Dec</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td><input type="text" value={number} onChange={_ => _} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        step: state.counter.step
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        incNumber, 
        decNumber,
        changeStepValue
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
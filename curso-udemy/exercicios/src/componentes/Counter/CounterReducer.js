import { CounterTypes } from './CounterTypes'

const INITIAL_STATE = {
    step: 1,
    number: 0
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CounterTypes.INC:
            return { ...state, number: state.number + state.step }
        case CounterTypes.DEC:
            return { ...state, number: state.number - state.step }
        case CounterTypes.CHANGE_STEP_VALUE:
            return { ...state, step: +action.payload }
        default:
            return state
    }
}
import { CounterTypes } from './CounterTypes'

export function incNumber() {
    return {
        type: CounterTypes.INC
    }
}

export function decNumber() {
    return {
        type: CounterTypes.DEC
    }
}

export function changeStepValue(e) {
    return {
        type: CounterTypes.CHANGE_STEP_VALUE,
        payload: e.target.value
    }
}
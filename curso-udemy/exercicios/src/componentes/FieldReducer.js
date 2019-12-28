const INITIAL_STATE = { value: '123' }

export default function(state = INITIAL_STATE, action) {
    console.log(action)

    switch (action.type) {
        case 'VALUE_CHANGED':
            return { value: action.payload }
        default:
            return state
    }

    // const cases = {
    //     'VALUE_CHANGED': () => { value: action.payload },
    //     'default': () => state
    // }
    // return (cases[action.type] || cases['default'])()
}
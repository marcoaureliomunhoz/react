import { Action, Reducer } from "redux";

export interface IInititalState {
    id?: string
}

export const initialState: IInititalState = {
    id: ''
}

export enum ActionType {
    SetIdentification
}

export interface IDispatchAction extends Action<ActionType> {
    payload: Partial<IInititalState>
}

const reducer: Reducer<IInititalState, IDispatchAction> = (state = initialState, action) => {
    if (action.type === ActionType.SetIdentification) {
        return { ...state, id: action.payload.id}
    } else {
        return state
    }
}

export default reducer
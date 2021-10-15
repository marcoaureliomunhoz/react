import { Dispatch } from "redux"
import { ActionType, IDispatchAction } from "../reducers/clientReducer"

export class ClientActions {
    private readonly dispatch: Dispatch<IDispatchAction>

    constructor(dispatch: Dispatch<IDispatchAction>) {
        this.dispatch = dispatch
    }

    setIdentification = (id: string) => {

        return this.dispatch({
            type: ActionType.SetIdentification,
            payload: {
                id: id
            }
        })
    }
}
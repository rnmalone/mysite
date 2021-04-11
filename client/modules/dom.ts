import { ActionHandler, Dispatch, IAction } from "../@types/store";
import shortid from "shortid";

enum DOMActionTypes {
    SET_HASH = 'app/modules/locale/SET_HASH'
}

export interface IDOMState {
    hash: string
}

export function setDOMHash() {
    return (dispatch: Dispatch<DOMActionTypes.SET_HASH>) => {
        dispatch({ type: DOMActionTypes.SET_HASH, payload: shortid() })
    }
}

const INITIAL_STATE: IDOMState = {
    hash: shortid()
}

const actionHandlers: ActionHandler<DOMActionTypes, IDOMState> = {
    [DOMActionTypes.SET_HASH]: (state, action) => ({ ...state, hash: action.payload })
}

export default function reducer(state: IDOMState = INITIAL_STATE, action: IAction<DOMActionTypes>) {
    const handler = actionHandlers[action.type]

    return handler ? handler(state, action) : state;
}

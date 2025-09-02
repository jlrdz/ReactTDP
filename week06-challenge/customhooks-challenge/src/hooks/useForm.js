import { useReducer } from "react"

const actions = {
    UPDATE_VALUE: 'UPDATE_VALUE',
    SET: 'SET'
}

const updateValue = (id, value) => {
    return {
        type: actions.UPDATE_VALUE,
        payload: {
            values: { [id]: value }
        }
    }
}

const set = (payload) => {
    return {
        type: actions.SET,
        payload: {
            values: payload
        }
    }
}


function reducer(state, action) {
    switch (action.type) {
        case actions.UPDATE_VALUE:
            return {
                ...state,
                ...action.payload
            }
        case actions.SET:
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export const useForm = (initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    function changeValue(e) {
        dispatch(updateValue(e.target.id, e.target.value))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify(state, null, 2));
    }

    function handleReset() {
        dispatch(set(initialState.values))
    }

    return {
        state,
        changeValue,
        handleSubmit,
        handleReset
    }
}
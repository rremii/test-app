import React from "react"
import {Actions} from "@entities/auth/types.ts";

interface initialState {
    isLoggedIn: boolean
}

export const initialState = {
    isLoggedIn: false
} as initialState

export const AuthContext = React.createContext(initialState)
export const AuthCtxReducer = (state: initialState, action: Actions): initialState => {

    switch (action.type) {
        case "SET_IS_LOGGED_IN": {
            return {
                ...state,
                isLoggedIn: action.payload
            }
        }

        default: {
            return state
        }
    }

}



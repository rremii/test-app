import React, {FC, useReducer} from "react"
import IntrinsicAttributes = React.JSX.IntrinsicAttributes;
import {Actions} from "@entities/auth/types.ts";
import {AuthContext, AuthCtxReducer, initialState} from "@entities/auth/Context.ts";

export let dispatchAuth: React.Dispatch<Actions>


export function AuthProvider<T extends IntrinsicAttributes>(Component: FC): (props: T) => React.ReactNode {


    return (props: T): React.ReactNode => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [calendarState, dispatch] = useReducer(AuthCtxReducer, initialState)


        dispatchAuth = dispatch

        return <AuthContext.Provider value={calendarState}>
            <Component {...props} />
        </AuthContext.Provider>
    }

}

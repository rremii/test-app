import {dispatchAuth} from "@entities/auth/Provider.tsx";
import {setIsLoginIn} from "@entities/auth/types.ts";

export const setIsLoggedIn = (payload: boolean) => {
    const action: setIsLoginIn = {
        type: "SET_IS_LOGGED_IN",
        payload,
    }
    dispatchAuth(action)
}

interface Action<T, P> {
    type: T
    payload: P
}


export type setIsLoginIn = Action<"SET_IS_LOGGED_IN", boolean>

export type Actions = setIsLoginIn

import {FC, Suspense} from "react"


export const withSuspense = (Component: FC) => () => {


    return (
        <Suspense
            fallback={
                <div>
                    LOADING
                </div>
            }
        >
            <Component/>
        </Suspense>
    )
}

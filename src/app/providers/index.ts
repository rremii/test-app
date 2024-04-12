import compose from "compose-function"
import {withRouter} from "./with-router.tsx"
import {withErrorBoundary} from "./with-errorBoundary.tsx"
import {withSuspense} from "./with-suspense.tsx"
import {AuthProvider} from "@entities/auth/Provider.tsx";

export const withProviders = compose(
    withErrorBoundary,
    withRouter,
    withSuspense,
    AuthProvider
)

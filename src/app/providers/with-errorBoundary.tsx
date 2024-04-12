import React, {FC} from "react"

interface ErrorBoundaryProps {
    children: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
    msg: string
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {hasError: false, msg: ""}
    }

    static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
        return {hasError: true, msg: error instanceof Error ? error.message : ""}
    }

    render(): React.ReactNode {
        const {hasError, msg} = this.state
        const {children} = this.props

        if (hasError) {
            return <div>{msg}</div>
        }

        return children
    }
}

export const withErrorBoundary = (Component: FC) => () => {
    return (
        <ErrorBoundary>
            <Component/>
        </ErrorBoundary>
    )
}

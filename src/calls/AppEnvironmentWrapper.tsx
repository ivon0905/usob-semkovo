interface Props {
    children: JSX.Element;
}

export const AppEnvironmentWrapper = ({ children }: Props) => {
    const { isFetching, isError, error } = getEnvQuery();
}

function getEnvQuery(): { isFetching: any; isError: any; error: any; } {
    throw new Error("Function not implemented.");
}

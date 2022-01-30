import { Route, Redirect } from "react-router-dom";

export const PrivateRouter = ({children, ...rest}) => {
    const isAuthenticated = false;

    return (
        <Route {...rest} render={
            ({location}) => isAuthenticated ? children : <Redirect to={{
                pathname: "/logowanie",
                state: {
                    from: location
                }
            }} />
        } />
    );
}
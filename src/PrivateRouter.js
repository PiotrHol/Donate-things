import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRouter = ({children, ...rest}) => {
    const isAuthenticated = useSelector(state => state.auth.id);

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
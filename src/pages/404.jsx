import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops, Sorry!</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    );
}

export default ErrorPage;
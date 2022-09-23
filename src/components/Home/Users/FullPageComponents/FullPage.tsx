import { useLocation } from "react-router-dom";

export const FullPage = () => {
    const location = useLocation();
    console.log(location.state.item);
    return <h1>Full Page</h1>;
};

import { useHistory, useLocation } from "react-router-dom";


const useGoBack = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const goBack = () => {history.replace(from)};
    return {goBack}
}
export default useGoBack;
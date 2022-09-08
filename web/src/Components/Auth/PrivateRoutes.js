import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    let auth = {'token':false}
    let currentUser = localStorage.getItem('customer');
    if (currentUser !== null) {
        currentUser = JSON.parse(currentUser);
        auth.token = currentUser.access_token;
    }
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}
export default PrivateRoutes;
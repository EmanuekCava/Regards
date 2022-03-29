import { useSelector } from 'react-redux'

import Auth from '../../pages/auth'

export const Protect = ({ children }) => {

    const { auth } = useSelector(state => state)

    if(auth.auth === null) {
        return <Auth />
    }

    return children;

}
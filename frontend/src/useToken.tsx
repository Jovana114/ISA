import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = typeof(tokenString) == 'string' ? JSON.parse(tokenString) : {};

        // console.log(userToken);

        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken: any) => {
        if(userToken){
            sessionStorage.setItem('token', JSON.stringify(userToken));
            // console.log(userToken);
            
            setToken(userToken.token);
            
        }
    };

    return {
        setToken: saveToken,
        token: getToken(),
    }
}
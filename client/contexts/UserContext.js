import React, { useEffect, useState } from "react";

export const UserContext = React.createContext();

import Constants from 'expo-constants';
const apiUrl = Constants.manifest.extra.apiUrl;

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        loggedIn: false,
        token: '',
        userId: null,
        isShelter: false,
        email: '',
        password: '',
        username: '',
    });

    useEffect(() => {
        console.log('UserContext updated: \n' + JSON.stringify(userData));
    }, [userData]);

    //Odświeża jwt kiedy skończy się jego ważność
    async function relogin() {
        var status, newToken = null, userId = null;
        const res = await fetch(`${apiUrl}/auth/login`, {
            body: JSON.stringify({
                email: userData.email,
                password: userData.password
            }),
            headers: { "Content-Type": "application/json" },
            method: 'POST'
        })
            .then(response => {
                status = response.status;
                return response.json();
            })
            .then(body => {
                var jsonStr = JSON.stringify(body);
                var jsonObj = JSON.parse(jsonStr);
                newToken = jsonObj.token;
                userId = jsonObj.user_id;
                username = jsonObj.username;
                isShelter = jsonObj.is_shelter;
                if (status == 200) {
                    setUserData({
                        ...userData,
                        token: newToken,
                        isShelter: isShelter,
                        userId: userId,
                        username: username,
                    });
                }
            });
        return { newToken, userId };
    }

    return (
        <UserContext.Provider value={{ userData, setUserData, relogin }}>
            {children}
        </UserContext.Provider>
    );
}

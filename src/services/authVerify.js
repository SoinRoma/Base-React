import React, {Component} from "react";
import {withRouter} from "react-router-dom";

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

class AuthVerify extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("accessToken");
        if (token) {
            const decodedJwt = parseJwt(token);
            if (!decodedJwt) {
                // Продумать логику если срок жизни токена истёк
                props.logOut();
            }
        } else {
            props.logOut();
        }
    }

    render() {
        return <div/>;
    }
}

export default withRouter(AuthVerify);

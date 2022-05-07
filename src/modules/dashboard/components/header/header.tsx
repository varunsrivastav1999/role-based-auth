import React from "react";
import {useHistory} from "react-router";
import "./header.scss";

export const Header = () => {
    const history = useHistory();

    return (
        <div className="header">
            <button className="action-btn" onClick={() => history.push("/dashboard/admin")}>Go to Admin Page</button>
            <button className="action-btn" onClick={() => history.push("/dashboard/user")}>Go to User Page</button>
            <button className="action-btn" onClick={() => {
                localStorage.removeItem('auth_token');
                history.push("/");
            }}>Logout</button>
        </div>
    )
}

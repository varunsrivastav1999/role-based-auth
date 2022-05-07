import React, {useEffect} from "react";
import {Header} from "../header/header";
import {StoreUtils} from "../../../../utils/store.utils";
import {UserRole} from "../../../../models/user.model";
import {useHistory} from "react-router";

export const Admin = () => {
    const history = useHistory();

    useEffect(() => {
        const user = StoreUtils.user;
        if (user && user.role !== UserRole.ADMIN) {
            history.push('/dashboard/user');
            setTimeout(() => {
                alert('Unauthorized access');
            }, 1);
        }
    }, []);

    return (
        <div className="admin-page">
            <Header />
            <p>Admin's Page</p>
        </div>
    )
}

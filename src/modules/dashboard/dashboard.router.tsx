import {Redirect, Route, Switch} from "react-router";
import React from "react";
import {Admin} from "./components/admin/admin";
import {User} from "./components/user/user";

export const DashboardRouter = () => {
    return (
        <Switch>
            <Redirect exact from="/dashboard" to="/dashboard/user" />
            <Route path="/dashboard/user" component={User}/>
            <Route path="/dashboard/admin" component={Admin}/>
        </Switch>
    )
}

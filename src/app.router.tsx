import {Redirect, Route, Switch} from "react-router";
import React from "react";
import Auth from "./modules/auth/auth";
import Dashboard from "./modules/dashboard/dashboard";

export const AppRouter = () => {
    return (
        <Switch>
            <Redirect exact
                      from="/"
                      to="/dashboard" />

            <Route path="/auth" component={Auth} />

            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    )
}

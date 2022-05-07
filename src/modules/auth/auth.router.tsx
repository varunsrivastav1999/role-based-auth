import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {Login} from "./components/login/login";

export const AuthRouter = () => {
    return (
        <Switch>
            <Redirect exact
                      from="/auth"
                      to="/auth/login"/>

            <Route path="/auth/login" component={Login} />
        </Switch>
    )
}

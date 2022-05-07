import React from "react";
import {isAuthenticated} from "../utils/authentication-status.utils";
import {If, Then, Else} from "react-if";
import {Redirect} from "react-router";
import {DashboardResolver} from "../resolvers/dashboard.resolver";

export const authGuard = (WrappedComponent: any) => ((props: any) => {
    WrappedComponent = DashboardResolver(WrappedComponent)
    return (
        <If condition={isAuthenticated()}>
            <Then>
                <WrappedComponent {...props} />
            </Then>
            <Else>
                <Redirect to="/auth"/>
            </Else>
        </If>
    )
});

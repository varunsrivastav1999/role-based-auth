import React from "react";
import {isAuthenticated} from "../utils/authentication-status.utils";
import {If, Then, Else} from "react-if";
import {Redirect} from "react-router";

export const anonymousGuard = (WrappedComponent: any) => ((props: any) => {
    return (
        <If condition={!isAuthenticated()}>
            <Then>
                <WrappedComponent {...props} />
            </Then>
            <Else>
                <Redirect to="/"/>
            </Else>
        </If>
    )
})

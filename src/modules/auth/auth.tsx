import React from "react";
import {anonymousGuard} from "../../guards/anonymous.guard";
import {withRouter} from "react-router";
import {AuthRouter} from "./auth.router";

const Auth: React.FunctionComponent = () => <AuthRouter />

export default anonymousGuard(withRouter(Auth));

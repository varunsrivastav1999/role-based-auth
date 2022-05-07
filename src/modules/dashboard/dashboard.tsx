import React from "react";
import {authGuard} from "../../guards/auth.guard";
import {withRouter} from "react-router";
import {DashboardRouter} from "./dashboard.router";

const Dashboard: React.FunctionComponent = (props: any) => <DashboardRouter />;

export default authGuard(withRouter(Dashboard));

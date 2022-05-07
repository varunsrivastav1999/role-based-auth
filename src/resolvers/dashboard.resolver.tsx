import React, {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {Else, If, Then} from "react-if";
import {StoreUtils} from "../utils/store.utils";
import {AxiosError} from "axios";
import {isAuthenticated} from "../utils/authentication-status.utils";
import {UserService} from "../services/user.service";

export const DashboardResolver = (WrappedComponent: any) => {
    class DashboardResolverFactory extends Component<RouteComponentProps, any> {
        state = {
            loaded: false,
        };

        style = {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        };

        componentDidMount() {
            if (!StoreUtils.user && isAuthenticated()) {
                const userService = UserService.getInstance();
                userService.me().then(user => {
                    StoreUtils.user = user;
                    this.setState({ loaded: true });
                }).catch((error: AxiosError) => {
                    if (error?.response?.status === 401) {
                        localStorage.removeItem('auth_token');
                        this.props.history.push('/');
                    }
                });
            } else if (StoreUtils.user && isAuthenticated()) {
                this.setState({ loaded: true });
            }
        }

        render() {
            return (
                <If condition={!this.state.loaded}>
                    <Then>
                        <div style={this.style}>
                            <p>Please wait while we validate this session.</p>
                        </div>
                    </Then>
                    <Else>
                        <WrappedComponent />
                    </Else>
                </If>
            )
        }

    }

    return withRouter(DashboardResolverFactory);
}



import React, {useRef, useState} from "react"
import "./login.scss";
import {AuthService} from "../../../../services/auth.service";
import {StoreUtils} from "../../../../utils/store.utils";
import {AxiosError} from "axios";
import {useHistory} from "react-router";

export const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const authServiceRef = useRef(AuthService.getInstance());
    const history = useHistory();

    const onFormUpdate = (key: string, value: string) => {
        setForm({
            ...form,
            [key]: value
        });
    }

    const login = () => {
        if (!(form.password && form.email) || loading) {
            return;
        }
        setLoading(true);
        const authService = authServiceRef.current;
        authService.login(form.email, form.password)
            .then(user => {
                StoreUtils.user = user;
                history.push('/dashboard');
            })
            .catch((error: AxiosError) => alert(error?.response?.data?.message || ''))
            .finally(() => setLoading(false))

    }

    return (
        <div className="auth-container">
            <div className="auth-container__main">
                <span className="title">Sign In</span>
                <input className="login-input-control"
                       type="email"
                       placeholder="Email"
                       value={form.email}
                       onChange={(event) => onFormUpdate('email', event.target.value)}/>
                <input className="login-input-control"
                       type="password"
                       placeholder="Password"
                       value={form.password}
                       onChange={(event) => onFormUpdate('password', event.target.value)}/>

                <button disabled={!(form.password && form.email) || loading } onClick={login} className="login-button">Sign In</button>
            </div>
        </div>
    )
}

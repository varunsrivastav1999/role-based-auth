import {User} from "../models/user.model";
import {ApiService} from "./core/api.service";

export class AuthService {
    private static instance: AuthService;
    private _apiService = ApiService.getInstance();

    // Return the instance of auth service
    static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    // Send the login credentials and get auth token 
    login(email: string, password: string): Promise<User> {
        return this._apiService.post('/auth/login', {
            email, password
        }).then((res: { auth_token: string, user: User }) => {
            localStorage.setItem('auth_token', res.auth_token)
            return res.user;
        });
    }
}

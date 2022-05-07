import {User} from "../models/user.model";
import {ApiService} from "./core/api.service";

export class UserService {
    private static instance: UserService;
    private _apiService = ApiService.getInstance();

    static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    me(): Promise<User> {
        return this._apiService.get('/users/me')
        .then((data: any) => data.user);
    }
}

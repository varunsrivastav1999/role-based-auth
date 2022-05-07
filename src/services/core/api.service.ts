import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {isAuthenticated} from "../../utils/authentication-status.utils";

export class ApiService {
    private static instance: ApiService;

    private _axiosInstance = axios.create({
        baseURL: 'https://role-based-authentication.herokuapp.com', // USE BASE URL HERE
        responseType: "json",
        headers: { 'Content-Type': 'application/json' }
    });

    constructor() {
        this._errorHandler = this._errorHandler.bind(this);
        this._activateInterceptors();
    }

    static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }

    get = async (path: string) => {
        return await this._axiosInstance.get(path)
            .then(res => res.data)
            .catch(this._errorHandler);
    }

    post = async (path: string, data?: { [key: string]: any }) => {
        return await this._axiosInstance.post(path, data)
            .then(res => res.data)
            .catch(this._errorHandler);
    }

    private readonly _errorHandler = (error: AxiosError) => {
        return Promise.reject(error);
    }

    private _activateInterceptors = () => {
        this._axiosInstance.interceptors.request.use(
            (request: AxiosRequestConfig) => {
                if (isAuthenticated()) {
                    request.headers!['Authorization'] = localStorage.getItem('auth_token')!
                }
                return request;
            }, (error: AxiosError) => this._errorHandler(error)
        )
    }
}

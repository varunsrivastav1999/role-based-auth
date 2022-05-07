export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
}

export interface User {
    id: number;
    username: string;
    role: UserRole;
    email: string;
    password: string;
}

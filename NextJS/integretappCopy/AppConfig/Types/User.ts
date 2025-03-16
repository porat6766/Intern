export interface IUserLogin { email: string, password: string }

export interface IUserSignUp { email: string, password: string, username: string }

export interface IUserFromDB {
    email: string, password: string, username: string, _id?: string, createdAt?: Date, updatedAt?: Date
}

export interface IUserSignUp {
    id?: string;
    email: string;
    username: string;
    createdAt?: Date;
    updatedAt?: Date;
}

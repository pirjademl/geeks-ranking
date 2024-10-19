export interface ILogin {
    email: string;
    password: string;
}

export interface ISignUp extends ILogin {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    college: string;
}

export interface ICollege {
    name: string;
    slug: string;
}

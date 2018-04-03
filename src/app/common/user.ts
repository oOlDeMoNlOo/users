export interface User {
    id?: number;
    login?: string;
    md5?: string;
    name?: string;
    surname?: string;
    patronymic?: string;
    telephone?: string;
    email?: string;
    group?: string;
    birthday?: Date;
    gender?: boolean;
    fun?: {edit, delete, view};
}

import { BaseEntity } from 'typeorm';
export declare enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    GHOST = "ghost"
}
export declare class User extends BaseEntity {
    id: number;
    role: UserRole;
    email: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    azurer_ad_id: JSON;
}

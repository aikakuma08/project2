import { BaseEntity } from 'typeorm';
import { User } from './user';
export declare class Post extends BaseEntity {
    id: number;
    title: string;
    description: string;
    is_published: boolean;
    user: User;
}

import { Repository } from 'typeorm';
import { User } from 'src/entities/user';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    remove(id: number): Promise<void>;
}

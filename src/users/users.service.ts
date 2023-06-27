import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<string> {
    await this.usersRepository.delete(id);
    return 'Successfully deleted a user';
  }

  async create(data: CreateUserDto): Promise<string> {
    await this.usersRepository.save(data);
    return 'Successfully saved a user';
  }

  async update(id: number, newData: UpdateUserDto): Promise<string> {
    if (this.findOne(id) === null) {
      return 'There is no such user!';
    } else {
      await this.usersRepository.save(newData);
      return 'Successfully updated a user';
    }
  }
}

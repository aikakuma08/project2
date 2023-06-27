import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '../entities/user';
import { CategorySeed } from '../seeds/category.seed';

export class SeedCategory1687494147222 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // const UserRepository = await this.dataSource
    //   .getRepository(User)
    //   .save(CategorySeed);
    // const Manager = this.dataSource.manager;
    await queryRunner.manager.save(User, CategorySeed);
    // await this.dataSource.manager.save(User, CategorySeed);
  }

  public async down(): Promise<any> {
    // do nothing
  }
}

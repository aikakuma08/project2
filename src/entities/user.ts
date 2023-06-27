import { Unique, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// import { Post } from './post';

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  GHOST = 'ghost',
}

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GHOST,
  })
  role: UserRole;

  @Column({ unique: true })
  email: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  // @Column()
  // password: string;

  // @Column()
  // azurer_ad_id: string;
}

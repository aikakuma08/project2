import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/user';
import { SeedCategory1687494147222 } from './migration/1687494147222-SeedCategory';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: '0.0.0.0',
  port: 3307,
  username: 'slivadmin',
  password: 'hello',
  database: 'sliv_db',
  entities: [User], //not ts, but js file
  migrations: [SeedCategory1687494147222], //not ts, but js file
  synchronize: true,
  logging: false,
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
    console.log('Data Source has been initialized!');
  })
  .catch((error) =>
    console.log('Error during Data Source initialization', error),
  );

export default AppDataSource;

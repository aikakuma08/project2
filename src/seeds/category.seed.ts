import { UserRole } from '../entities/user';

export const CategorySeed = [
  {
    role: UserRole.EDITOR,
    email: 'aika.kuma@sparkliving.io',
    first_name: 'Aika',
    last_name: 'Kuma',
    is_active: true,
  },
  {
    role: UserRole.ADMIN,
    email: 'ken.tsang@sparkliving.io',
    first_name: 'Ken',
    last_name: 'Tsang',
    is_active: true,
  },
  {
    role: UserRole.ADMIN,
    email: 'dicky.leung@sparkliving.io',
    first_name: 'Dicky',
    last_name: 'Leung',
    is_active: true,
  },
  {
    role: UserRole.ADMIN,
    email: 'kinsen.lee@sparkliving.io',
    first_name: 'Kinsen',
    last_name: 'Lee',
    is_active: true,
  },
];

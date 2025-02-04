import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { UserFactory } from './user.js';
import { TicketFactory } from './ticket.js';

let sequelize: Sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL as string);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PW as string,
    {
      host: 'localhost',
      dialect: 'postgres',
    },
  );
}

const User = UserFactory(sequelize);
const Ticket = TicketFactory(sequelize);

User.hasMany(Ticket, { foreignKey: 'assignedUserId' });
Ticket.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser'});

export { sequelize, User, Ticket };

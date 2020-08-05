import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { CreateUserUserCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUserCase(
  postgresUsersRepository,
  mailtrapMailProvider,
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController }
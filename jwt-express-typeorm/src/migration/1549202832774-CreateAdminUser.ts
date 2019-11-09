import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Users } from "../entity/Users";

export class CreateAdminUser1547919837483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new Users();
    user.userid = "admin";
    user.password = "admin";
    user.hashPassword();
    user.role = "ADMIN";
    const userRepository = getRepository(Users);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}

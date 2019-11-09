import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

// import { User } from "../entity/User";
import { Users } from "../entity/Users";
import config from "../config/config";

class AuthController {
  static login = async (req: Request, res: Response) => {
    //Check if userid and password are set
    let { userid, password } = req.body;
    if (!(userid && password)) {
      res.status(400).send({status: 'failed', message: "Username or Password missing" });
    }

    //Get user from database
    const userRepository = getRepository(Users);
    let user: Users;
    try {
      user = await userRepository.findOneOrFail({ where: { userid } });
    } catch (error) {
      res.status(401).send({status: 'failed', message: "User not found." });
    }

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send({status: 'failed', message: "Password match failed" });
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user.id, userid: user.userid },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    res.send({status: 'passed', message: "Login Successful.", token: token });
  };

  static changePassword = async (req: Request, res: Response) => {
    //Get ID from JWT
    const id = res.locals.jwtPayload.userId;

    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      res.status(400).send();
    }

    //Get user from the database
    const userRepository = getRepository(Users);
    let user: Users;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send({status: 'failed', message: "User Not Found." });
    }

    //Check if old password matchs
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      res.status(401).send({status: 'failed', message: "Old Password do not match" });
      return;
    }

    //Validate de model (password lenght)
    user.password = newPassword;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }
    //Hash the new password and save
    user.hashPassword();
    userRepository.save(user);

    res.status(204).send("Success.");
  };
}
export default AuthController;

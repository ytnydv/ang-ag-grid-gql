
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

// import { User } from "../entity/User";
import { Users } from "../entity/Users";

class UserController{

static listAll = async (req: Request, res: Response) => {
  //Get users from database
  const userRepository = getRepository(Users);
  const users = await userRepository.find({
    select: ["id", "userid", "role", "first_name", "last_name", "website", "avatar", "email" ] //We dont want to send the passwords on response
  });

  //Send the users object
  res.send(users);
};

static getOneById = async (req: Request, res: Response) => {
  //Get the ID from the url
  const id: number = req.params.id;

  //Get the user from database
  const userRepository = getRepository(Users);
  try {
    const user = await userRepository.findOneOrFail(id, {
      select: ["id", "userid", "role", "first_name", "last_name", "website", "avatar", "email"] //We dont want to send the password on response
    });
    res.send(user);
  } catch (error) {
    res.status(404).send("User not found");
  }
};

static newUser = async (req: Request, res: Response) => {
  //Get parameters from the body
  let { userid, password, role } = req.body;
  let user = new Users();
  user.userid = userid;
  user.password = password;
  user.role = role;

  //Validade if the parameters are ok
  const errors = await validate(user);
  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }

  //Hash the password, to securely store on DB
  user.hashPassword();

  //Try to save. If fails, the userid is already in use
  const userRepository = getRepository(Users);
  try {
    await userRepository.save(user);
  } catch (e) {
    console.log("ERROR:::", e);
    res.status(409).send("userid already in use");
    return;
  }

  //If all ok, send 201 response
  res.status(201).send("User created");
};

static editUser = async (req: Request, res: Response) => {
  //Get the ID from the url
  const id = req.params.id;

  console.log("editUser---req.body====>>>",req.body)
  //Get values from the body
  const { userid, role,  } = req.body;

  //Try to find user on database
  const userRepository = getRepository(Users);
  let user;
  try {
    user = await userRepository.findOneOrFail(id);
  } catch (error) {
    //If not found, send a 404 response
    res.status(404).send("User not found");
    return;
  }

  //Validate the new values on model
  user.userid = userid;
  user.role = role;
  const errors = await validate(user);
  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }

  //Try to safe, if fails, that means userid already in use
  try {
    await userRepository.save(user);
  } catch (e) {
    res.status(409).send("userid already in use");
    return;
  }
  //After all send a 204 (no content, but accepted) response
  res.status(204).send();
};

static deleteUser = async (req: Request, res: Response) => {
  //Get the ID from the url
  const id = req.params.id;

  const userRepository = getRepository(Users);
  let user: Users;
  try {
    user = await userRepository.findOneOrFail(id);
  } catch (error) {
    res.status(404).send("User not found");
    return;
  }
  userRepository.delete(id);

  //After all send a 204 (no content, but accepted) response
  res.status(204).send();
};
};

export default UserController;

import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import graphql from "./graphql";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/graphql", graphql);

export default routes;

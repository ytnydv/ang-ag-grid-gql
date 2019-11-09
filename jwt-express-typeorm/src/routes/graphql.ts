import { Router } from "express";
import GraphqlController from "../controllers/GraphqlController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import * as GraphQLHTTP from 'express-graphql';
import schema from '../graphql/schema';

const router = Router();

//Graphql endpoint
router.post("/", [checkJwt], GraphQLHTTP({ schema: schema, graphiql: true }));

export default router;
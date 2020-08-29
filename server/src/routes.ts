import express from "express";
import ClassesControler from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
import RegisterController from "./controllers/RegisterController";
import AuthenticateController from "./controllers/AuthenticateController";

const routes = express.Router();
const classesControllers = new ClassesControler();
const connectionsController = new ConnectionsController();
const registerController = new RegisterController();
const authenticateController = new AuthenticateController();

routes.post("/register", registerController.create);

routes.post("/login", authenticateController.create);

routes.post("/me");

// Lista as aulas que correspondem ao params
routes.get("/classes", classesControllers.index);

// Cria uma nova classe (schedule da aula)
routes.post("/classes", classesControllers.create);

// Lista as conexões entre alunos e proffys
routes.get("/connections", connectionsController.index);

// Cria uma conexão entre alunos e proffys
routes.post("/connections", connectionsController.create);

export default routes;

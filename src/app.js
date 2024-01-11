import express from "express";
import connectionDataBase from "./app/database/connection.js";
import managementController from "./app/controllers/management.js";

const app = express();

app.use(express.json());

app.get("/bairros/buscar", managementController.neighborhoodList);

app.get("/bairros/buscar/:id", managementController.neighborhoodListById);

app.post("/bairros/gerenciamento", managementController.neighborhoodAdd);

app.put("/bairros/gerenciamento/update/:id", managementController.neighborhoodUpdate);

app.delete("/bairros/gerenciamento/delete/:id", managementController.neighborhoodDelete);

// app.put("/gerenciamento/:id", managementController.neighborhoodUpdate)

export default app;

// GET, POST, PUT, DELETE

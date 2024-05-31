import { Router } from 'express';
import managementController from "../controllers/management.controller.js";
const route = Router();

route.get("/bairros", managementController.neighborhoodList);

route.get("/bairros/buscar", managementController.neighborhoodList);

route.get("/bairros/buscar/:id", managementController.neighborhoodListById);

route.post("/bairros/gerenciamento", managementController.neighborhoodAdd);

route.put("/bairros/gerenciamento/update/:id", managementController.neighborhoodUpdate);

route.delete("/bairros/gerenciamento/delete/:id", managementController.neighborhoodDelete);

export default route
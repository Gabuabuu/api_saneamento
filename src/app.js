import express from "express";
import route from "./routes/management.route.js";

const app = express();

app.use(express.json());
app.use(route)

export default app;
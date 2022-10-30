import { Router } from "express";
import restaurantRoutes from "./restaurant.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/restaurants", restaurantRoutes);

export default router;

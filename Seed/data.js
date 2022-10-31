import db from "../db/connection.js";
import restaurant from "../Models/Restaurant.js";
import restaurants from "./restaurants.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();

  await restaurant.create(restaurants);

  await db.close();
};

insertData();

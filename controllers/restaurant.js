import restaurant from "../Models/restaurant.js";


export const getRestaurant = async (req, res) => {
  try {
    const restaurants = await restaurant.find();
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
export const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await restaurant.findById(id);

    if (restaurant) {
      return res.json(restaurant);
    }

    res.status(404).json({ message: "Restaurant not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createRestaurant = async (req, res) => {
  try {
    const restaurant = new restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await restaurant.findByIdAndUpdate(id, req.body);
    res.status(201).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await restaurant.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Restaurant deleted!");
    }

    throw new Error("Restaurant not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
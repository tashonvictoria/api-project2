import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String },
  website: { type: String },
  locations: [{ type: String }],
  rating: { type: String },
  description: { type: String },
  dresscode: { type: String },
  PriceRange: { type: String },
  cuisineType: [{ type: String }],
  dresscodeAttire: { type: String },
  happyHour: { type: String },
  liveMusic: { type: String },
});

export default mongoose.model("Restaurant", restaurantSchema);

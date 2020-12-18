import * as mongoose from "mongoose";

const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const carSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: String, required: true },
	brand: { type: String, required: true },
	created_at: { type: Date, default: Date.now },
});

export const Car = mongoose.model("Car", carSchema);

import petModel from "../models/petModel.js";

//Get all missing pets
export const getAllPets = async (req, res) => {
  try {
    const pets = await petModel.find({});
    res.status(201).send(pets);
  } catch (err) {
    res.status(404).send(err);
  }
};

//Get all pets lost at specific city
//City is sent as a parameter of the query object of the request object
export const getFilteredPets = async (req, res) => {
  try {
    const { city } = req.query;
    const pets = await petModel.find({ city });
    res.status(201).send(pets);
  } catch (err) {
    res.status(404).send(err);
  }
};

//Create new lost pet listing
export const createPetListing = async (req, res) => {
  const newPet = new petModel(req.body);
  try {
    await newPet.save();
    res.status(201).send(newPet);
  } catch (err) {
    res.status(400).send(err);
  }
};

//Get specific pet
export const getPet = async (req, res) => {
    const { id } = req.params;
  try {
    const pet = await petModel.find({ _id: id });
    res.status(201).send(pet);
  } catch (err) {
    res.status(404).send(err);
  }
}

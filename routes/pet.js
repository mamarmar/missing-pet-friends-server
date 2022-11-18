import express from "express";
import { getAllPets, getFilteredPets, getPet, createPetListing } from "../controllers/pet";

const router = express.Router();

router.get("/", getAllPets);
router.get("/filtered", getFilteredPets);
router.get("/:id", getPet);

router.post("/new", createPetListing);

export default router;
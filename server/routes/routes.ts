import { Router } from "express";
import { routeCreatePokemon, routeGetAPokemon, routeGetAllPokemons, routeGetAllTypes } from "../controllers/controllers.routes.ts";

const router = Router();

router.get("/pokemons", routeGetAllPokemons)
router.get("/pokemon/:id", routeGetAPokemon)
router.post("/pokemons", routeCreatePokemon)
router.get("/types", routeGetAllTypes)

export default router;
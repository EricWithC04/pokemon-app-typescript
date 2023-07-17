import { Router } from "express";
import { routeCreatePokemon, routeGetAPokemon, routeGetAllPokemons } from "../controllers/controllers.routes.ts";

const router = Router();

router.get("/pokemons", routeGetAllPokemons)
router.get("/pokemon/:id", routeGetAPokemon)
router.post("/pokemons", routeCreatePokemon)
router.get("/types", ()=>{})

export default router;
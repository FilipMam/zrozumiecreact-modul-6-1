import { createContext } from "react";
import { recipes } from "../data/recipes";

export const SelectedRecipeContext = createContext(recipes[0]);

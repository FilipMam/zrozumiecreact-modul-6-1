import styles from "./Cookbook.module.css";
import { recipes } from "../../data/recipes";
import { useState } from "react";
import { List } from "../List/List";
import { Panel } from "../Panel/Panel";

export function Cookbook() {
    const [selectedRecipeId, setSelectedRecipeId] = useState(1);

    const selectedRecipe = recipes.find(
        (recipe) => recipe.id === selectedRecipeId
    );

    const { name, time, ingredients, description } = selectedRecipe;

    return (
        <div className={styles.container}>
            <List
                recipes={recipes}
                onSelectRecipe={(id) => setSelectedRecipeId(id)}
            />
            <Panel
                name={name}
                time={time}
                ingredients={ingredients}
                description={description}
            />
        </div>
    );
}

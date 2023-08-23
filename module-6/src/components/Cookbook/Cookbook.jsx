import styles from "./Cookbook.module.css";
import { recipes } from "../../data/recipes";
import { useState } from "react";
import { List } from "../List/List";
import { Panel } from "../Panel/Panel";
import { SelectedRecipeContext } from "../../context/SelectedRecipeContext";
import { Recipe } from "../Recipe/Recipe";

export function Cookbook() {
    const [selectedRecipeId, setSelectedRecipeId] = useState(1);

    const selectedRecipe = recipes.find(
        (recipe) => recipe.id === selectedRecipeId
    );

    const { name, time, ingredients, description } = selectedRecipe;

    return (
        <>
            <SelectedRecipeContext.Provider value={selectedRecipe}>
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
            </SelectedRecipeContext.Provider>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                voluptatibus voluptate modi culpa. Minus optio natus veniam
                incidunt. Suscipit necessitatibus cum inventore porro molestiae
                illum voluptas atque natus laborum a!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                vero explicabo doloremque delectus modi soluta sequi cum quaerat
                exercitationem quis odit eos illum debitis repudiandae non
                veritatis saepe doloribus, quos ipsam nobis expedita laboriosam.
                Neque, officiis dicta itaque alias cumque pariatur iste, eum in
                suscipit numquam necessitatibus aspernatur, dolor possimus.
            </p>
            <h2>Promowany przepis:</h2>
            <SelectedRecipeContext.Provider value={recipes[2]}>
                <Recipe />
            </SelectedRecipeContext.Provider>
        </>
    );
}

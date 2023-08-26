import { useState } from "react";
import styles from "./App.module.css";
import { recipes } from "./data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/Cookbook/Cookbook";
import { RecipeContext } from "./context/RecipeContext";
import { Recipe } from "./components/Recipe/Recipe";
import { TopBar } from "./components/TopBar/TopBar";
import { IsLoggedInStateContext } from "./context/IsLoggedInStateContext";

function App() {
    const [selectedRecipeId, setSelectedRecipeId] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const selectedRecipe = recipes.find(
        (recipe) => recipe.id === selectedRecipeId
    );

    return (
        <IsLoggedInStateContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            <TopBar />
            <div className={styles.container}>
                <RecipeContext.Provider value={selectedRecipe}>
                    <List
                        recipes={recipes}
                        onSelectRecipe={setSelectedRecipeId}
                    />
                    <Cookbook heading="Książka kucharska" />
                </RecipeContext.Provider>
            </div>

            <h2>Przepis tygodnia:</h2>
            <hr />
            <RecipeContext.Provider value={recipes[3]}>
                <Recipe />
            </RecipeContext.Provider>
        </IsLoggedInStateContext.Provider>
    );
}

export default App;

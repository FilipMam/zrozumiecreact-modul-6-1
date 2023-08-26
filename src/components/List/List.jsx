import styles from "./List.module.css";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import { Button } from "../Button/Button";

export function List({ recipes, onSelectRecipe }) {
    const { id: selectedRecipeId } = useContext(RecipeContext);

    return (
        <nav className={styles.nav}>
            <span className={styles.title}>Lista przepisów:</span>
            <ul className={styles.list}>
                {recipes.map(({ id, name }) => (
                    <li key={id} className={styles.item}>
                        <Button
                            active={id === selectedRecipeId}
                            onClick={() => onSelectRecipe(id)}
                        >
                            {name}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

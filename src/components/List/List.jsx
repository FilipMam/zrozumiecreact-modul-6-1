import { useContext } from "react";
import styles from "./List.module.css";
import { SelectedRecipeContext } from "../../context/SelectedRecipeContext";

export function List({ recipes, onSelectRecipe }) {
    const { id: selectedRecipeId } = useContext(SelectedRecipeContext);

    console.log(selectedRecipeId);

    return (
        <ul className={styles.list}>
            {recipes.map(({ id, name }) => (
                <li key={id} className={styles.item}>
                    <button
                        className={`${styles.button} ${
                            selectedRecipeId === id ? styles.active : ""
                        }`}
                        onClick={() => onSelectRecipe(id)}
                    >
                        {name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

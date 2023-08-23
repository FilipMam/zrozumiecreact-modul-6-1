import styles from "./List.module.css";

export function List({ recipes, onSelectRecipe }) {
    return (
        <ul className={styles.list}>
            {recipes.map(({ id, name }) => (
                <li key={id} className={styles.item}>
                    <button
                        className={styles.button}
                        onClick={() => onSelectRecipe(id)}
                    >
                        {name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

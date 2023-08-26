import styles from "./Recipe.module.css";

export function Recipe({ name, time, ingredients, description, img }) {
    return (
        <>
            <h2>{name}</h2>
            <img src={img} alt="" className={styles.img} />
            <div>
                <span>Czas przygotowania: {time} minut</span>
            </div>
            <br />
            <span>Składniki:</span>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <p>{description}</p>
        </>
    );
}

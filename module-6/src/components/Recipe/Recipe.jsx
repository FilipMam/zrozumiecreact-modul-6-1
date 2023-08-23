import { useContext } from "react";
import { SelectedRecipeContext } from "../../context/SelectedRecipeContext";

export function Recipe() {
    const { name, time, ingredients, description } = useContext(
        SelectedRecipeContext
    );

    return (
        <>
            <h2>{name}</h2>
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

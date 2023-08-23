import { Recipe } from "../Recipe/Recipe";

export function Article({ name, time, ingredients, description }) {
    return (
        <>
            <Recipe
                name={name}
                time={time}
                ingredients={ingredients}
                description={description}
            />
            <button>Lubię to!</button>
        </>
    );
}

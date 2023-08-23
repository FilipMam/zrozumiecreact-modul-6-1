export function Recipe({ name, time, ingredients, description }) {
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

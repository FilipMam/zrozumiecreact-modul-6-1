import { Article } from "../Article/Article";

export function Panel({ name, time, ingredients, description }) {
    return (
        <main>
            <h1>Przepisy na smaczne rzeczy</h1>
            <Article
                name={name}
                time={time}
                ingredients={ingredients}
                description={description}
            />
        </main>
    );
}

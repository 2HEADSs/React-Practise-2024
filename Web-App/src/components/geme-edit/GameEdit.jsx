import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useGetOneGames } from "../../hooks/useGames";
import { useEffect } from "react";
import gamesAPI from "../../api/games-api";

const initialValues = {
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: ''
}

export default function GameEdit() {
    const navigate = useNavigate()
    const { gameId } = useParams();
    const [game, setGame] = useGetOneGames(gameId)
    console.log(game);

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(Object.assign(initialValues, game), async (values) => {
        const updatedGame = await gamesAPI.update(gameId, values);
        // navigate(`/games/${gameId}/details`);
        setGame(updatedGame)

    });


    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        onChange={changeHandler} value={values.title} type="text" id="title" name="title" />

                    <label htmlFor="category">Category:</label>
                    <input
                        onChange={changeHandler} value={values.category} type="text" id="category" name="category" />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        onChange={changeHandler} value={values.maxLevel}
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        onChange={changeHandler} value={values.imageUrl} type="text" id="imageUrl" name="imageUrl" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" onChange={changeHandler} value={values.summary}></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Edit Game"
                    />
                </div>
            </form>
        </section>
    );
}

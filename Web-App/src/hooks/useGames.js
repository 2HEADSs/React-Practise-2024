import { useEffect, useState } from 'react';

import gamesAPI from '../api/games-api';

export function useGetAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getAll();
            // console.log(result);

            setGames(result);
        })();
    }, []);

    return [games, setGames]
}


export function useGetOneGames(gameId) {
    const [game, setGame] = useState({});

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getOne(gameId);
            // console.log(result);

            setGame(result);
        })();
    }, [gameId]);

    return [game, setGame]
}

export function useCreateGame() {
    const gameCreateHandler = async (gameData) => gamesAPI.create(gameData);
    return gameCreateHandler
}
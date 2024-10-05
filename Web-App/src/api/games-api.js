import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/games';
const BASE_URL_CREATE = 'http://localhost:3030/data/games';

export const getAll = async () => {
    const result = await request.get(BASE_URL);
    const games = Object.values(result);

    return games;
};

export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`);

export const create = (gameId) => request.post(`${BASE_URL_CREATE}/${gameId}`);

const gamesAPI = {
    getAll,
    getOne,
    create
}

export default gamesAPI;

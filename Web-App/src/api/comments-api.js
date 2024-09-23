import requester from "./requester"
const BASE_URL = 'http://localhost:3030/jsonstore/games';

//can create without comments after "/"
// const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`
const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`
const create = async (gameId, username, text) => requester.post(buildUrl(gameId), { username, text });

const getAll = async (gameId) => {

    const result = await requester.get(buildUrl(gameId))
    const commments = Object.values(result);
    console.log(commments);

    return commments;
}

export default {
    create,
    getAll
}
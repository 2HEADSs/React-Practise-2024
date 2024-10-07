import requester from "./requester"
const BASE_URL = 'http://localhost:3030/data/comments';

//can create without comments after "/"

const create = (gameId, text) => requester.post(BASE_URL, { gameId, text });

const getAll = (gameId) => {
    const params = new URLSearchParams({
        where: `gameId ="${gameId}"`
    });

    return requester.get(`${BASE_URL}?${params.toString().replace(/\+/g, '%20')}`)


}

export default {
    create,
    getAll
}
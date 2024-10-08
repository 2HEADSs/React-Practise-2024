import requester from "./requester";
const BASE_URL = 'http://localhost:3030/data/comments';

// Function to create a comment
export const createComment = (gameId, text) => requester.post(BASE_URL, { gameId, text });

// Function to get all comments for a specific game
export const getAllComments = (gameId) => {
    const params = new URLSearchParams({
        where: `gameId ="${gameId}"`,
        load: `author=_ownerId:users`
    });

    return requester.get(`${BASE_URL}?${params.toString().replace(/\+/g, '%20')}`);
};



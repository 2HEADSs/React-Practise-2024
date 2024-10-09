import { dispatch, useEffect, useReducer } from "react";
import { getAllComments, createComment } from "../api/comments-api"

export function useCreateComment() {
    const createHandler = (gameId, comment) => createComment(gameId, comment)
    return createHandler;
}
function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload;
        case 'ADD_COMMENT':
            return [...state, action.payload]
        default:
            return state;
    }
}

export function useGetAllCommentes(gameId) {
    const [comments, dispatch] = useReducer(commentsReducer, []);

    useEffect(() => {
        (async () => {
            const result = await getAllComments(gameId);
            dispatch({ type: 'GET_ALL', payload: result })
        })();
    }, [gameId])
    return [comments, dispatch];
}
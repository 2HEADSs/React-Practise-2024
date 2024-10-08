import { useEffect, useState } from "react";
import { getAllComments, createComment } from "../api/comments-api"

export function useCreateComment() {
    const createHandler = (gameId, comment) => createComment(gameId, comment)
    return createHandler;
}

export function useGetAllCommentes(gameId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getAllComments(gameId);
            setComments(result)
        })();
    }, [gameId])
    return [comments, setComments];
}
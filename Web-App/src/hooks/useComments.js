import { useEffect, useState } from "react";
import commentsApi from "../api/comments-api";

export function useCreateComment() {
    const createHandler = (gameIdId, comment) => commentsApi.create(gameIdId, comment)
    return createHandler;
}

export function useGetAllCommentes(gameId) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await commentsApi.getAll(gameId);
            setComments(result);
        })();
    }, [gameId])
    return [comments, setComments];
}
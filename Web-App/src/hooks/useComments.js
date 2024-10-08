import { useEffect, useState } from "react";
import {commentsAPI} from "../api/comments-api"
export function useCreateComment() {
    const createHandler = (gameIdId, comment) => commentsAPI
    return createHandler;
}

export function useGetAllCommentes(gameId) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        (async () => {
        })();
    }, [gameId])
    return [comments, setComments];
}
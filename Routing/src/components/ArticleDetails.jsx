import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ArticleDetails() {
    const [article, setArticle] = useState({});
    const { articleId } = useParams();
    const navigate = useNavigate();
    console.log(articleId);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`
            );
            if (response.statusText == 'No Content') {
                //redirect
                navigate('/not-found');
            }
            const result = await response.json();
            console.log(result);
            setArticle(result);
        })();
    }, []);
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden"></div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <p className="text-base font-semibold leading-7 text-indigo-600">
                        Article
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {article.title}
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                        {article.content}
                    </p>
                </div>
            </div>
        </div>
    );
}

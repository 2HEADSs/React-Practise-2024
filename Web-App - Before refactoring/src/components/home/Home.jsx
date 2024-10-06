import { useEffect, useState } from "react";
import gamesApi from "../../api/games-api";
import LatestGame from "./latest-game/LatestGame";

export default function Home() {
    const [latestGame, setLatestGmaes] = useState([]);

    useEffect(() => {
        (async () => {
            //TODO: modify to fetch inly latest games
            const result = await gamesApi.getAll();

            setLatestGmaes(result.reverse().slice(0, 3))

        })()
    }, [])
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {/* <!-- Display div: with information about every game (if any) --> */}
                {latestGame.length > 0
                    ? latestGame.map(game => < LatestGame key={game._id} {...game} />)
                    : <p className="no-articles">No games yet</p>
                }


                {/* <!-- Display paragraph: If there is no games  --> */}

            </div>
        </section>
    );
}

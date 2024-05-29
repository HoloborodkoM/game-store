import React from 'react';
import { useSelector} from 'react-redux';
import { GameBuy } from '../../components/game-buy';
import { GameCover } from '../../components/game-cover/game-cover';
import { GameGenre } from '../../components/game-genre';
import './game-page.css';

export const GamePage = () => {
   const game = useSelector(state => state.games.currentGame);

   if (!game) return null

   return (
      <div className="game-page">
         <h1 className="game-page-title">{ game.title }</h1>
         <div className="game-page-content">
            <div className="game-page-left">
               <iframe
                  width="90%"
                  height="450px"
                  src={ `https://www.youtube.com/embed/${ game.video.split('v=')[1] }` }
                  title="YouTube"
                  style={{ border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               ></iframe>
            </div>
            <div className="game-page-right">
               <GameCover image={ game.image } />
               <p>{ game.description }</p>
               <p className="secondary-text">Popular tags:</p>
               { 
                  game.genres.map((genre) => (
                     <GameGenre genre={ genre } key={ genre }/>
                  ))
               }
               <div className="game-page-buy-game">
                  <GameBuy game={ game }/>
               </div>
            </div>
         </div>
      </div>
   );
};
import React from 'react';
import { GameItem } from '../../components/game-item';
import { GameList } from '../../store/game-list';
import './home-page.css';

export const HomePage = () => {
   return (
      <div className="home-page">
         { GameList.map(game => <GameItem game={game} key={game.id}/>) }
      </div>
   );
};
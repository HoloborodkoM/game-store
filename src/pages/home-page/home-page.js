import React from 'react';
import './home-page.css';
import { GameItem } from '../../components/game-item';
import { GameList } from '../../store/game-list';

export const HomePage = () => {
   return (
      <div className="home-page">
         { GameList.map(game => <GameItem game={game} key={game.id}/>) }
      </div>
   )
}